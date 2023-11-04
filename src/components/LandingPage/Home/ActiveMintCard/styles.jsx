import styled from "@emotion/styled";
import { Button, LinearProgress } from "@mui/material";

export const WalletButton = styled(Button)(({ theme }) => ({
  width: "96px",
  height: "36px",
  backgroundColor: "#E4DCFD",
  color: "#7A52F4",
  top: "17px",
  left: "17px",

  [theme.breakpoints.down("sm")]: {
    width: "96px",
    height: "36px",
  },
}));
export const DateButton = styled(Button)(({ theme }) => ({
  width: "120px",
  height: "32px",
  backgroundColor: "#EBF0F0",
  color: "#5D5D5B",
  top: "17px",
  left: "17px",

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
