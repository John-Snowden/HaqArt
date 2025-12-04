"use client";

import { toast } from "sonner";
import { makeAutoObservable, reaction, runInAction } from "mobx";

import {
  checkLink,
  checkEmail,
  removeNonNumeric,
  checkPhoneNumber,
  formatPhoneNumber,
} from "@shared/utils";
import { ROUTES } from "@/constants";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { LEAD_STATUS } from "@shared/prisma/prisma/client";

import { CallsModule } from "./module/calls";
import { CasesModule } from "./module/cases";

export default class EditPersonVM {
  root: RootStore;
  isLoading: boolean = true;

  casesModule: CasesModule;
  callsModule: CallsModule;

  name: string | undefined = undefined;
  link: string | undefined = undefined;
  email: string | undefined = undefined;
  phoneNumber: string | undefined = undefined;
  homeAddress: string | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    this.casesModule = new CasesModule(root);
    this.callsModule = new CallsModule(root);

    const { selectedPerson } = this.root.personsStore;
    if (selectedPerson) {
      this.name = selectedPerson.name;
      this.link = selectedPerson.link ?? undefined;
      this.email = selectedPerson.email ?? undefined;
      this.phoneNumber = selectedPerson.phoneNumber ?? undefined;
      this.homeAddress = selectedPerson.homeAddress ?? undefined;
    }
    makeAutoObservable(this);

    reaction(
      () => this.root.personsStore.selectedPersonId,
      () => {
        this.root.casesStore.cases = [];
        this.root.callsStore.calls = [];
      },
    );
  }

  setName = (v: string) => (this.name = v ? v : undefined);
  setEmail = (v: string) => (this.email = v ? v : undefined);
  setLink = (v: string) => (this.link = v ? v : undefined);
  setHomeAddress = (v: string) => (this.homeAddress = v ? v : undefined);
  setPhoneNumber = (v: string) => {
    const digits = removeNonNumeric(v);
    this.phoneNumber = digits ? formatPhoneNumber(digits) : undefined;
  };

  upsertPerson = async () => {
    try {
      if (!this.validate()) return;
      if (!this.name) throw new Error("name missing");

      await this.root.personsStore.upsertPerson({
        name: this.name.trim(),
        link: this.link?.trim() ?? null,
        phoneNumber: this.phoneNumber?.trim() ?? null,
        email: this.email?.trim() || null,
        homeAddress: this.homeAddress?.trim() ?? null,
        leadStatus: this.leadStatus,
        authorId: this.authorId,
        originId: this.originId,
      });

      toast.success(translations.toastMessages.success);
      if (!this.isUpdateMode) {
        this.root.routerStore.replace(ROUTES.PERSONS_LIST);
      }
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  deletePerson = async () => {
    try {
      await this.root.personsStore.deletePerson();
      toast.success(translations.toastMessages.success);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    if (!this.name) toast.warning(translations.toastMessages.nameMissing);
    else if (this.link && !checkLink(this.link)) {
      toast.warning(translations.toastMessages.badLink);
    } else if (this.email && !checkEmail(this.email)) {
      toast.warning(translations.toastMessages.badLink);
    } else if (this.phoneNumber && !checkPhoneNumber(this.phoneNumber)) {
      toast.warning(translations.toastMessages.phoneNumberNotNineDigits);
    } else isValid = true;
    return isValid;
  };

  getRelatedData = async () => {
    try {
      runInAction(() => (this.isLoading = true));
      await Promise.all([
        this.casesModule.getCasesByPerson(),
        this.callsModule.getCallsByPerson(),
      ]);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  setSelectedCaseId = (id: number) => {
    this.root.casesStore.selectedCaseId = id;
  };

  resetSelectedCaseId = () => {
    this.root.casesStore.selectedCaseId = undefined;
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.personsStore.selectedPerson);
  }

  get hasContact(): boolean {
    return Boolean(this.phoneNumber || this.email);
  }

  get leadStatus(): LEAD_STATUS {
    // TODO temp condtion
    return this.hasContact
      ? LEAD_STATUS.CONTACT_SHARED
      : LEAD_STATUS.ADDED_TO_DB;
  }

  get authorId(): number {
    let result;
    const selectedPersonAuthorId =
      this.root.personsStore.selectedPerson?.authorId;
    const me = this.root.authStore.me;

    if (this.isUpdateMode) {
      if (!selectedPersonAuthorId) {
        throw new Error("selected person author id missing");
      }
      result = selectedPersonAuthorId;
    } else {
      if (!me?.id) throw new Error("Me id missing");
      result = me.id;
    }

    return result;
  }

  get originId(): number {
    const selectedOriginId = this.root.originsStore.selectedOriginId;
    if (!selectedOriginId) throw new Error("selected origin id missing");
    return selectedOriginId;
  }
}
