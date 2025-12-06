import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { getLastCall } from "@/utils/calls/utils";
import { EditableCaseFields } from "@shared/lib/actions";
import { CALL_STATUS } from "@shared/prisma/prisma/client";

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

      await this.root.casesStore.upsertCase(
        {
          nextDialDate: this.nextDialDate,
          lastDialDate: this.lastDialDate,
        } as EditableCaseFields, // TODO type pzts
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
      toast.warning(translations.toastMessages.redialDateAlreadyPast);
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

  get lastDialDate(): Date | null {
    const { calls } = this.root.callsStore;
    return getLastCall(calls.slice())?.createdAt ?? null;
  }
}
