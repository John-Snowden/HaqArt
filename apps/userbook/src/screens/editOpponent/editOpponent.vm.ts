"use client";

import { toast } from "sonner";
import { makeAutoObservable } from "mobx";

import { checkLink } from "@shared/utils";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";

export default class EditOpponentVM {
  root: RootStore;

  name: string | undefined = undefined;
  link: string | undefined = undefined;
  info: string | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;

    const { selectedOpponent } = this.root.opponentsStore;
    if (selectedOpponent) {
      this.name = selectedOpponent.name ?? undefined;
      this.link = selectedOpponent.link ?? undefined;
      this.info = selectedOpponent.info ?? undefined;
    }
    makeAutoObservable(this);
  }

  setName = (v: string) => (this.name = v ? v : undefined);
  setLink = (v: string) => (this.link = v ? v : undefined);
  setInfo = (v: string) => (this.info = v ? v : undefined);

  upsertOpponent = async () => {
    try {
      if (!this.validate()) return;
      if (!this.name) throw new Error("opponent name missing");

      await this.root.opponentsStore.upsertOpponent({
        name: this.name.trim(),
        link: this.link?.trim() ?? null,
        info: this.info?.trim() ?? null,
        authorId: this.authorId,
      });
      toast.success(translations.toastMessages.success);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  deleteOpponent = async () => {
    try {
      await this.root.opponentsStore.deleteOpponent();
      toast.success(translations.toastMessages.successs);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    if (!this.name) toast.warning(translations.toastMessages.nameMissing);
    else if (this.link && !checkLink(this.link)) {
      toast.warning(translations.toastMessages.badLink);
    } else isValid = true;
    return isValid;
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.opponentsStore.selectedOpponentId);
  }

  get authorId(): number {
    const selectedOpponentAuthorId =
      this.root.opponentsStore.selectedOpponent?.authorId;
    const myId = this.root.authStore.me?.id;

    if (this.isUpdateMode) {
      if (!selectedOpponentAuthorId)
        throw new Error("selected opponent author id missing");
      return selectedOpponentAuthorId;
    } else {
      if (!myId) throw new Error("me id missing");
      return myId;
    }
  }
}
