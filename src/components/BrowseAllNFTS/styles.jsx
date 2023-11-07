import { Box, Button, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)(({ theme }) => ({
  flex: 1,

  [theme.breakpoints.down("sm")]: {},
}));
export const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "800",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {},
}));

export const NFTCard = styled(Box)(({ theme }) => ({
  width: 302,
  height: 450,
  border: `1px solid gray`,
  borderRadius: 15,
  marginTop: 20,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const NFTContainer = styled(Box)(({ theme }) => ({
  flexDirection: "row",
  display: "flex",
  gap: 10,
  // justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  marginLeft: "1%",
  marginTop: 20,

  [theme.breakpoints.down("sm")]: {},
}));

export const NftTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 800,
  textAlign: "center",
  marginTop: 23,

  [theme.breakpoints.down("sm")]: {},
}));
export const NftDescription = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  textAlign: "center",
  color: "gray",

  [theme.breakpoints.down("sm")]: {},
}));

export const NftBottom = styled(Typography)(({ theme }) => ({
  width: "80%",
  alignSelf: "center",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  marginLeft: "10%",
  marginTop: 15,

  [theme.breakpoints.down("sm")]: {},
}));

export const NftBottomText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {},
}));

export const NftBottomHilight = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "bold",

  [theme.breakpoints.down("sm")]: {},
}));

export const LoadmoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#E4DCFD",
  width: 241,
  height: 46,
  borderRadius: 23,
  border: "none",
  marginTop: 20,
  marginLeft: "auto",
  marginRight: "auto",
  // marginLeft: "40%",

  [theme.breakpoints.down("sm")]: {},
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {},
}));
