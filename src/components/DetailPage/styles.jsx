"use client";

import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ImageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/images/details-cover-bg.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "428px",
  borderRadius: 10,
  [theme.breakpoints.down("md")]: {
    borderRadius: 10,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const DetailProfileSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  position: "absolute",
  zIndex: 1,
  bottom: -90,
  padding: "0px 8% 0px 6%",
  marginTop: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    flexDirection: "column",
    justifyContent: "center",
    bottom: -120,
    padding: "0px 0% 0px 0%",
  },
}));

export const DetailProfilePicBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "180px",
  overflow: "hidden",
  backgroundColor: "white",
  padding: theme.spacing(1),
  borderRadius: 10,
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.down("md")]: {
    width: "160px",
    height: "150px",
  },
}));

export const ProfileDetailsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0px 0% 0px 8%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(18),
    flexDirection: "column",
    padding: "0px 0% 0px 0%",
  },
}));

export const ProfileDeatislTextSextion = styled(Box)(({ theme }) => ({
  width: "82%",
  marginTop: theme.spacing(4),
  paddingRight: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {
    width: "74%",
  },
  [theme.breakpoints.down("md")]: {
    paddingRight: theme.spacing(0),
    width: "100%",
  },
}));

export const ViewCollectionButton = styled(Button)(({ theme }) => ({
  width: "238px",
  height: "46px",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  border: "3px solid #fff",
  [theme.breakpoints.down("md")]: {
    width: "158px",
    height: "46px",
    borderRadius: 30,
  },
}));

export const profileImageContainer = styled(Button)(({ theme }) => ({
  width: "221px",
  height: "301px",
  top: "100%",
  left: "10%",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: "120px",
    height: "120px",
    left: "10%",
    top: "100%",
    borderRadius: 30,
  },
}));

export const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(0),
  },
}));

export const IconWrapper = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(1),
  svg: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white,
    width: "30px",
    height: "30px",
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: theme.spacing(5),
  width: "100%",
  flexWrap: "wrap",
}));

export const SeeMoreBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(2),
}));

export const SeeMoreDetailsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.inherit.main,
  fontSize: 13,
  fontWeight: "bold",
  cursor: "pointer",
  width: "fit-content",
}));

export const CustomProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "8px",
  borderRadius: 10,
  width: "100%",
  marginTop: "2px",
  "& .MuiLinearProgress-bar": {
    backgroundColor: theme.palette.primary,
  },
  "& .MuiLinearProgress-bar1Buffer": {
    backgroundColor: theme.palette.primary,
  },
}));

export const ProgressMainBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const CustomProgressBarWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  fontSize: "14px",
}));

export const MintNowButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "0 auto",
  height: "46px",
  padding: "0px 25px",
  boxShadow: "none",
}));

export const CenterImagesBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  gap: theme.spacing(2),
  marginTop: "60px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
}));

export const ImageSliderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  gap: "24px",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

export const ImageSliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 10,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "22%",
  height: "291px",
  borderRadius: "16px",
  border: "1px solid gray",
  padding: "19px 20px",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    width: "46%",
    height: "auto",
    padding: "6px 10px",
    borderRadius: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    padding: "6px 10px",
  },
}));

export const BackgroundBox = styled(Box)(({ theme }) => ({
  height: "50%",
  width: "150%",
  position: "absolute",
  backgroundColor: theme.palette.mode == "light" ? "#DCD4F4" : "#7A52F4",
  zIndex: 0,
}));

export const RoadMapSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));
