import { Box, Grid, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme: { palette } }) => ({
  backgroundColor: palette.common.white,
}));
export const StyledGrid = styled(Grid)(({ theme: { spacing } }) => ({
  gap: spacing(1),
  width: "100%",
  boxSizing: "border-box",
  margin: spacing(4, 0),
}));
