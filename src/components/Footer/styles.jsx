import styled from "@emotion/styled";
import { Grid, TextField } from "@mui/material";
import Link from "next/link";

export const StyledFooter = styled("div")(({ theme: { palette } }) => ({
  backgroundColor: palette.mode === "light" ? "#F5F7F7" : "#171818",
  color: "#fff",
  padding: "32px 0",
  textAlign: "center",
  height: "450px",
}));

export const StyledColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledEmailInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  height: "40px",
  marginTop: "8px",
  borderRadius: "40px",
}));

export const StyledLink = styled(Link)(({ theme: { palette } }) => ({
  color: palette.mode == "light" ? "#000" : "#fff",
  textDecoration: "none",
  margin: "8px 0",
  fontSize: "14px",
}));
export const Input = styled("input")(({ theme: { palette } }) => ({
  padding: "0 42px",
  borderRadius: "24px",
  background: palette.mode === "light" ? "#EBF0F080" : "#EBF0F01A",
  color: palette.mode === "light" ? "#5D5D5B" : "#fff",
  border: `1px solid ${palette.mode == "light" ? "gray" : "#fff"}`,
  outline: "none",
  height: "48px",
  width: "100%",
  marginTop: "8px",
  "::placeholder": {
    color: "#5D5D5B",
  },
}));

export const FollowCard = styled("div")(({ theme: { palette } }) => ({
  backgroundColor: palette.mode === "light" ? "#000" : "#fff",
  height: "60px",
  width: "60px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  margin: "0 8px",
}));
