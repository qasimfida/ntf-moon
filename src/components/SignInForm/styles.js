import { Button, Grid, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";

export const Wrapper = styled(Grid)({
  display: "flex",
  position: "relative",
  height: "auto",
});
export const ImageWrapper = styled(Grid)(({ theme }) => ({}));
export const BackgroundImage = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/images/sign-in-bg-image.png")',
  height: "100%",
  backgroundSize: "cover",
}));
export const ImageTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 5),
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    color: "transparent",
  },
}));
export const StyledSignInWrapper = styled(Grid)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.black.main
      : theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    borderTopLeftRadius: "1.7rem",
    borderTopRightRadius: "1.7rem",
    position: "relative",
    top: "-50px",
    padding: theme.spacing(3, 2),
  },
}));
export const LogoWrapper = styled(Box)({});
export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  gap: theme.spacing(1),
}));
export const QrCodeWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(0.6, 1),
  width: "100%",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.black.dark
      : theme.palette.common.white,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1, 5),
    height: "fit-content",
  },
}));

export const QrCode = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(0),
  },
}));
