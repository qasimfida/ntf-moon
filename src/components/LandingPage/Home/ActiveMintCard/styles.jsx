import styled from "@emotion/styled";
import { Box, Button, LinearProgress } from "@mui/material";

export const MintBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px",
  width: "23%",
  borderRadius: "16px",
  border: `1px solid ${
    theme.palette.mode == "light" ? "#CFDBD599" : "#CFDBD526"
  }`,
  [theme.breakpoints.down("lg")]: {
    width: "48%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const WalletButton = styled(Button)(({ theme }) => ({
  width: "96px",
  height: "36px",
  boxShadow: "none",
  backgroundColor: theme.palette.mode == "dark" ? "#7A52F4" : "#E4DCFD",
  color: theme.palette.mode == "dark" ? "#fff" : "#7A52F4",
  [theme.breakpoints.down("sm")]: {
    width: "96px",
    height: "36px",
  },
}));
export const DateButton = styled(Button)(({ theme }) => ({
  width: "120px",
  height: "32px",
  boxShadow: "none",
  backgroundColor: theme.palette.grey[1000],
  color: theme.palette.mode == "dark" ? "#fff" : "#000",
  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "32px",
  },
}));

export const CustomProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "8px",
  borderRadius: 10,
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#E4DCFD",
  },
  "& .MuiLinearProgress-bar1Buffer": {
    backgroundColor: "blue", // Unfilled color
  },
  [theme.breakpoints.down("sm")]: {
    height: "8px",
  },
}));
