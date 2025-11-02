"use client";

import { makeAutoObservable } from "mobx";

import RootStore from "@/store/rootStore";
import { User } from "@shared/prisma/prisma/client";

export type WritableUserFields = Pick<
  User,
  "username" | "phoneNumber" | "problemFull" | "homeAddress"
>;

export default class ConstructionComplaintsVM implements WritableUserFields {
  root: RootStore;

  username: string = "";
  phoneNumber: string = "";
  problemFull: string = "";
  homeAddress: string = "";

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setUsername = (v: string) => (this.username = v);
  setPhoneNumber = (v: string) => (this.phoneNumber = v);
  setProblemFull = (v: string) => (this.problemFull = v);
  setHomeAddress = (v: string) => (this.homeAddress = v);

  sendComplaint = () => {};
}
