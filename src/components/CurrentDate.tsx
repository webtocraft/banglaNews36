"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const CurrentDate = () => {
  const date = useSyncExternalStore(subscribe, getDate, () => "");

  return <time className="text-sm">{date}</time>;
};

export default CurrentDate;