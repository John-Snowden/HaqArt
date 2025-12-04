import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { CALL_STATUS } from "@shared/prisma/prisma/client";
import { EditableCaseFields, prismaUpsertCase } from "@shared/lib/actions";

export class EditCallVM {
  root: RootStore;

  callStatus: CALL_STATUS | undefined = undefined;
  info: string | undefined = undefined;
  nextDialDate: Date | null = null;

  constructor(root: RootStore) {
    this.root = root;

    const { selectedCall } = this.root.callsStore;
    if (selectedCall) {
      this.callStatus = selectedCall.callStatus;
      this.info = selectedCall.info ?? undefined;
    }
    const { selectedCase } = this.root.casesStore;
    if (!selectedCase) throw new Error("case id missing");
    this.nextDialDate = selectedCase.nextDialDate;
    makeAutoObservable(this);
  }

  setCallStatus = (v: CALL_STATUS | undefined) => (this.callStatus = v);
  setInfo = (v: string | undefined) => (this.info = v);
  setNextDialDate = (v: Date | null) => (this.nextDialDate = v);

  upsertCall = async () => {
    if (!this.validate()) return;

    const { selectedCase } = this.root.casesStore;
    if (selectedCase?.id === undefined) {
      throw new Error("case id missing");
    } else if (this.callStatus === undefined) {
      throw new Error("call status is missing");
    }

    try {
      await this.root.callsStore.upsertCall({
        callStatus: this.callStatus,
        info: this.info ?? null,

        caseId: selectedCase.id,
        authorId: this.authorId,
        personId: this.personId,
      });

      await prismaUpsertCase(
        { nextDialDate: this.nextDialDate } as EditableCaseFields, // TODO type pzts
        selectedCase.id,
      );

      toast.success(translations.toastMessages.success);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    if (this.callStatus === undefined) {
      toast.warning(translations.toastMessages.callStatusMissing);
    } else if (this.nextDialDate && this.nextDialDate <= new Date()) {
      toast.warning(translations.toastMessages.redialDatePast);
    } else isValid = true;
    return isValid;
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.callsStore.selectedCall);
  }

  get authorId(): number {
    const me = this.root.authStore.me;
    const selectedCall = this.root.callsStore.selectedCall;
    if (this.isUpdateMode) {
      if (!selectedCall) throw new Error("selected call missing");
      return selectedCall.authorId;
    } else {
      if (!me) throw new Error("me is missing");
      return me.id;
    }
  }

  get personId(): number {
    const selectedCall = this.root.callsStore.selectedCall;
    const selectedPerson = this.root.personsStore.selectedPerson;

    if (this.isUpdateMode) {
      if (!selectedCall) throw new Error("selected call missing");
      return selectedCall.personId;
    } else {
      if (!selectedPerson) throw new Error("selected person missing");
      return selectedPerson.id;
    }
  }
}
