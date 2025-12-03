"use client";

import { makeAutoObservable } from "mobx";
import RootStore from "@/stores/rootStore";

export class CallsModule {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getCallsByPerson = async () => {
    const personId = this.root.personsStore.selectedPerson?.id;
    if (!personId) throw new Error("person id missing");

    const where = { personId };
    await this.root.callsStore.getCalls(where);
  };

  setSelectedCallId = (id: number) => {
    this.root.callsStore.selectedCallId = id;
  };

  resetSelectedCallId = () => (this.root.callsStore.selectedCallId = undefined);

  setSelectedCaseId = (id: number) => {
    this.root.casesStore.selectedCaseId = id;
  };
}
