"use client";

import { makeAutoObservable, runInAction } from "mobx";

import { Employee } from "@shared/prisma/prisma/client";
import { prismaGetEmployees } from "@shared/lib/actions/employees";

import RootStore from "./rootStore";

export type PublicEmployeeData = Omit<Employee, "password" | "createdAt">;

export default class EmployeesStore {
  root: RootStore;

  employees: PublicEmployeeData[] = [];

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  getEmployees = async () => {
    const res = await prismaGetEmployees();
    runInAction(() => (this.employees = res));
  };

  clear = () => (this.employees = []);
}
