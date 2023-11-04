import { Box, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "block",
  minHeight: "calc(100vh - 84px)",
  backgroundColor: palette.common.white,
  margin: "0px auto",
  width: "85%",
  padding: "47px 4px 0px 4px",
}));

export const MainSetion = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
  })
);
