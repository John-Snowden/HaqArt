import { makeAutoObservable, runInAction } from "mobx";

import {
  CallFull,
  prismaGetCalls,
  prismaUpsertCall,
  EditableCallFields,
} from "@shared/lib/actions/calls";
import { Prisma } from "@shared/prisma/prisma/client";

import RootStore from "./rootStore";

class CallsStore {
  root: RootStore;

  calls: CallFull[] = [];
  selectedCallId: number | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getCalls = async (where: Prisma.CallWhereInput) => {
    const res = await prismaGetCalls(where);
    runInAction(() => (this.calls = res));
  };

  upsertCall = async (call: EditableCallFields) => {
    return await prismaUpsertCall(call, this.selectedCallId);
  };

  clear = () => {
    this.calls = [];
    this.selectedCallId = undefined;
  };

  get selectedCall(): CallFull | null {
    return this.calls.find((c) => c.id === this.selectedCallId) ?? null;
  }
}

export default CallsStore;
