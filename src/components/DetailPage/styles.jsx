"use client";

import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ImageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/images/carousel.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "#000",
  height: "60vh",
  borderRadius: 10,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "60vh",
    borderRadius: 10,
  },
}));

export const ViewCollectionButton = styled(Button)(({ theme }) => ({
  width: "238px",
  height: "46px",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  border: "3px solid #fff",
  left: "80%",
  top: "100%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("md")]: {
    width: "158px",
    height: "46px",
    left: "70%",
    transform: "translate(-50%, -50%)",
    top: "100%",

    borderRadius: 30,
  },
}));

export const profileImageContainer = styled(Button)(({ theme }) => ({
  width: "221px",
  height: "301px",
  top: "100%",
  left: "10%",
  backgroundColor: "green",
  zIndex: 1,
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("md")]: {
    width: "120px",
    height: "120px",
    left: "10%",
    transform: "translate(-50%, -50%)",
    top: "100%",
    borderRadius: 30,
  },
}));

export const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  //   marginTop: 70,
  transform: "translate(3.5%, 70px)",
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
  width: "80%",
  marginLeft: "20%",
  paddingRight: "10%",
}));

export const SeeMoreDetailsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.inherit.main,
  fontSize: 13,
  fontWeight: "bold",
  cursor: "pointer",
  width: "80%",
  marginLeft: "20%",
  paddingLeft: "60%",
  [theme.breakpoints.down("md")]: {
    transform: "translate(0%, 0%)",
  },
}));

export const CustomProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "8px",
  borderRadius: 10,
  width: "100%",
  marginTop: "2px",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#E4DCFD",
  },
  "& .MuiLinearProgress-bar1Buffer": {
    backgroundColor: "blue",
  },
  [theme.breakpoints.down("sm")]: {
    height: "15px",
  },
}));

export const CustomProgressBarWrapper = styled(Box)(({ theme }) => ({
  width: "50%",
  height: 50,
  transform: "translate(50%, 0%)",
}));

export const MintNowButton = styled(Button)(({ theme }) => ({
  width: "114px",
  height: "46px",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  marginBottom: 20,
}));

export const ImageSliderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(2),
  marginTop: theme.spacing(-25),

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(-17),
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(-10),
  },
}));

export const ImageSliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 10,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "254px",
  height: "254px",
  borderRadius: "16px",
  border: "1px solid gray",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    width: "150px",
    height: "150px",
    borderRadius: "16px",
    border: "1px solid gray",
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
    borderRadius: "16px",
    border: "1px solid gray",
    padding: theme.spacing(2),
  },
}));

export const BackgroundBox = styled(Box)(({ theme }) => ({
  height: 154,
  width: "150%",
  backgroundColor: "#DCD4F4",
  zIndex: -1,
  marginTop: 100,
  marginLeft: "-25%",
  [theme.breakpoints.down("md")]: {
    height: 114,
    width: "150%",
    backgroundColor: "#DCD4F4",
    zIndex: -1,
    marginTop: 100,
    marginLeft: "-25%",
  },
  [theme.breakpoints.down("sm")]: {
    height: 54,
    width: "150%",
    backgroundColor: "#DCD4F4",
    zIndex: -1,
    marginTop: 100,
    marginLeft: "-25%",
  },
}));
