import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";

export default class DenialOfEntryVM {
  root;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
}
