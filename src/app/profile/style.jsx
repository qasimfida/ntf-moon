"use client";

import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  minHeight: "calc(100vh - 84px)",
  backgroundColor: palette.common.white,
  flexDirection: "column",
  padding: "47px 4px",
  [breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const DeatislMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  })
);

export const DeatislBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 9px 20px 9px",
    [breakpoints.up("md")]: {
      width: "75%",
    },
  })
);

export const PrimaryButton = styled(Button)(
  ({ theme: { palette, breakpoints } }) => ({
    minWidth: "160px",
    width: "fit-content",
    padding: "10px 20px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  })
);

export const SecondaryButton = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    minWidth: "160px",
    width: "fit-content",
    padding: "10px 20px",
    boxShadow: "none",
    backgroundColor: palette.primary.light,
    color: palette.primary.dark,
    borderRadius: "23px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: "none",
    },
  })
);

export const SettingsMainHeading = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "42px",
    fontWeight: "bold",
    color: palette.text.primary,
    marginBottom: "40px",
    [breakpoints.down("md")]: {
      fontSize: "28px",
    },
  })
);

export const ProfilePicSection = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "20px",
    gap: "33px",
    [breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      gap: "10px",
    },
  })
);

export const ProfilePicMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginBottom: "20px",
    [breakpoints.down("md")]: {
      alignItems: "center",
    },
  })
);

export const ProfilePicBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    width: "158px",
    height: "158px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: "14px",
    backgroundColor: "white",
    padding: "7px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    [breakpoints.down("md")]: {
      width: "150px",
      height: "150px",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  })
);

export const SubHeading = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: palette.text.primary,
    [breakpoints.down("md")]: {
      fontSize: "16px",
    },
  })
);

export const ProfileHeadingBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
  })
);

export const GreyText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "12px",
    color: palette.grey[900],
  })
);

export const CoverPicMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginBottom: "20px",
  })
);

export const CoverPicBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    width: "100%",
    height: "158px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: "14px",
    backgroundColor: "white",
    padding: "7px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  })
);
