"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGetActiveTheme = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return themeMode;
};

export default useGetActiveTheme;
