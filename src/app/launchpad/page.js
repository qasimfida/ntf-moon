"use client";
import Footer from "@/components/Footer/Footer";
// import Launchpad from "@/components/Launchpad/Launchpad";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box } from "@mui/material";
import { MainBox, MainSetion } from "./style";
import Launchpad from "@/components/LandingPage/Launchpad";

export default function LaunchpadIndex() {
  const themeMode = useGetActiveTheme();

  return (
    <MainSetion>
      <MainBox>
        <Launchpad />
      </MainBox>
    </MainSetion>
  );
}
