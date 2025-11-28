"use client";

import { toast } from "sonner";
import { makeAutoObservable, toJS } from "mobx";

import {
  checkEmail,
  checkLink,
  removeNonNumeric,
  formatPhoneNumber,
} from "@shared/utils";
import { translations } from "@/localize";
import RootStore from "@/stores/rootStore";
import { CASE_CATEGORY } from "@shared/prisma/prisma/client";
import { CAN_EDIT_BLOGGER_ROLES } from "@/stores/constants/blogger";

export default class EditBloggerVM {
  root: RootStore;

  name: string | undefined = undefined;
  link: string | undefined = undefined;
  subscribersCount: bigint | undefined = undefined;
  info: string | undefined = undefined;
  priceSOM: bigint | undefined = undefined;
  priceUSD: bigint | undefined = undefined;
  phoneNumber: string | undefined = undefined;
  email: string | undefined = undefined;
  categories: CASE_CATEGORY[] = [];

  constructor(root: RootStore) {
    this.root = root;

    const { selectedBlogger } = this.root.bloggersStore;
    if (selectedBlogger) {
      this.name = selectedBlogger.name;
      this.link = selectedBlogger.link;
      this.subscribersCount = selectedBlogger.subscribersCount;
      this.info = selectedBlogger.info ?? undefined;
      this.priceSOM = selectedBlogger.priceSOM ?? undefined;
      this.priceUSD = selectedBlogger.priceUSD ?? undefined;
      this.phoneNumber = selectedBlogger.phoneNumber ?? undefined;
      this.email = selectedBlogger.email ?? undefined;
      this.categories = selectedBlogger.categories;
    }

    makeAutoObservable(this);
  }

  setName = (v: string) => (this.name = v ? v : undefined);
  setLink = (v: string) => (this.link = v ? v : undefined);
  setSubscribersCount = (v: string) => {
    const numStr = removeNonNumeric(v);
    this.subscribersCount = numStr ? BigInt(numStr) : undefined;
  };
  setInfo = (v: string) => (this.info = v ? v : undefined);
  setPrice = (type: "som" | "usd", v: string) => {
    const numStr = removeNonNumeric(v);
    if (type === "som") this.priceSOM = numStr ? BigInt(numStr) : undefined;
    else this.priceUSD = numStr ? BigInt(numStr) : undefined;
  };
  setPhoneNumber = (v: string) => {
    const digits = removeNonNumeric(v);
    this.phoneNumber = digits ? formatPhoneNumber(digits) : undefined;
  };
  setEmail = (v: string) => (this.email = v ? v : undefined);
  setCategories = (categories: CASE_CATEGORY[]) => {
    this.categories = categories;
  };

  upsertBlogger = async () => {
    try {
      if (!this.validate()) return;
      if (!this.name) throw new Error("blogger name missing");
      else if (!this.link) throw new Error("blogger link missing");
      else if (!this.subscribersCount) {
        throw new Error("blogger subscribers count missing");
      }

      await this.root.bloggersStore.upsertBlogger({
        name: this.name,
        link: this.link,
        subscribersCount: this.subscribersCount,
        info: this.info ?? null,
        priceSOM: this.priceSOM ?? null,
        priceUSD: this.priceUSD ?? null,
        phoneNumber: this.phoneNumber ?? null,
        email: this.email ?? null,
        categories: toJS(this.categories),
        authorId: this.authorId,
      });
      toast.success(translations.toastMessages.success);
    } catch (e) {
      this.root.alertStore.toggleAlert(translations.alertMessages.error + e);
    }
  };

  validate = (): boolean => {
    let isValid = false;
    if (!this.name) toast.warning(translations.toastMessages.nameMissing);
    else if (!this.subscribersCount) {
      toast.warning(translations.toastMessages.subscribersCountMissing);
    } else if (!this.link)
      toast.warning(translations.toastMessages.linkMissing);
    else if (!checkLink(this.link)) {
      toast.warning(translations.toastMessages.badLink);
    } else if (this.email && !checkEmail(this.email))
      toast.warning(translations.toastMessages.badEmail);
    else if (this.categories.length === 0) {
      toast.warning(translations.toastMessages.categoryMissing);
    } else {
      isValid = true;
    }
    return isValid;
  };

  get isUpdateMode(): boolean {
    return Boolean(this.root.bloggersStore.selectedBloggerId);
  }

  get authorId(): number {
    const selectedBloggerAuthorId =
      this.root.bloggersStore.selectedBlogger?.author.id;
    const myId = this.root.authStore.me?.id;

    if (this.isUpdateMode) {
      if (!selectedBloggerAuthorId) {
        throw new Error("selected blogger id missing");
      }
      return selectedBloggerAuthorId;
    } else {
      if (!myId) throw new Error("me id missing");
      return myId;
    }
  }

  get canWrite(): boolean {
    const myRoles = this.root.authStore.me?.roles;
    const role = CAN_EDIT_BLOGGER_ROLES.find((r) => myRoles?.includes(r));
    return Boolean(role);
  }
}
