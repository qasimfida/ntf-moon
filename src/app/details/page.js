"use client";
// import Launchpad from "@/components/Launchpad/Launchpad";
import { DetailsPage } from "@/components/DetailPage";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { MainBox, MainSetion } from "./style";

export default function LaunchpadIndex() {
  const themeMode = useGetActiveTheme();

  return (
    <MainSetion>
      <MainBox>
        <DetailsPage />
      </MainBox>
    </MainSetion>
  );
}
