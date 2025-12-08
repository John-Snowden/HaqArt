"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { UIListWrapper } from "@/ui";
import { useProfileVM } from "@/context";

import { ManagerStats } from "../types/types";
import { StatsListItem } from "./StatsListItem";

export const StatsList = observer(() => {
  const { isLoading, stats, getStats } = useProfileVM();
  const entries = stats ? Object.entries(stats) : [];
  const typed = entries as [
    keyof ManagerStats,
    ManagerStats[keyof ManagerStats],
  ][];

  useEffect(() => {
    getStats();
  }, [getStats]);

  const renderItems = () => {
    return typed.map(([key, value]) => (
      <StatsListItem
        key={key}
        title={statsTitleDictionary[key as keyof ManagerStats]}
        data={value}
      />
    ));
  };

  return (
    <UIListWrapper isLoading={isLoading} hasItems={Boolean(stats)}>
      {renderItems()}
    </UIListWrapper>
  );
});

const statsTitleDictionary: Record<keyof ManagerStats, string> = {
  totalUsersCount: "Число всех добавленных пользователей",
  lastRecordDate: "Дата последней записи",
  recentUsersCount: "Число добавленных пользователей за последнюю дату",
};
