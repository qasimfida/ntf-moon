"use client";

import { theme } from "@/components/Theme/constants";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  backgroundColor: palette.common.white,
  padding: "1rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    padding: "2rem",
  },
}));

export const SliderMain = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    height: 666,
    padding: "1rem",
    backgroundImage: `url("/images/home_slider_bg.png")`,
    display: "flex",
    alignItems: "center",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      padding: "2rem",
    },
    "&& div:nth-child(1)": {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: 470,
      width: 441,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundImage: `url("/images/home_explore_bg.png")`,
      // backgroundColor: "#0f0f0f",
      borderRadius: 15,
      [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
        height: 470,
        width: 441,
      },
    },
    "&& div:nth-child(1) > h2": {
      color: "#fff",
      paddingBottom: 57,
      fontSize: 42,
      fontWeight: 800,
      textAlign: "center",
      lineHeight: "normal",
    },
  })
);

export const TopCollection = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "5px 0px",
    backgroundColor: palette.common.white,
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      //   width: "100%",
    },
    "&& h2": {
      color: palette.text.primary,
      fontSize: 28,
      fontWeight: 800,
      lineHeight: "normal",
      borderRadius: 18,
      padding: "9px 15px",
      boxShadow: "0px 8px 12px 0px rgba(153, 155, 168, 0.25)",
    },
    "&& div:nth-child(2)": {
      display: "flex",
      gap: 6,
    },
  })
);

export const TableBoxMain = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.common.white,
    display: "flex",
    gap: 48,
    width: "100%",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      //   padding: "2rem",
    },
    "&& div": {
      width: "100%",
    },
  })
);

export const TableHead = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  width: "100%",
  padding: "10px 16px",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {},

  "&& > div": {
    width: "15%",
  },
  "&& > div:nth-child(1)": {
    width: "70%",
  },
}));

export const TableHeadText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "18px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const Table = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    gap: "8px",
  },
}));

export const Row = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  minHeight: "68px",
  borderRadius: "8px",
  padding: "10px 16px",
  border: `1px solid ${palette.grey[800]}`,
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    // flexDirection: "row",
  },
  "&& > div": {
    width: "15%",
  },
  "&& > div:nth-child(1)": {
    width: "70%",
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
}));

export const RowText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const SectionHeading = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 800,
    margin: "10px 0px",
    lineHeight: "27px",
    [breakpoints.down("md")]: {
      fontSize: "20px",
    },
  })
);
