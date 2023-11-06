import { Box, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(
  ({ theme: { palette, shadows, spacing }, shadow }) => ({
    padding: shadow ? spacing(2, 3) : spacing(2, 0),
    boxShadow:
      shadow && palette.mode === "light"
        ? shadows[1]
        : shadow
        ? "0px 3px 4px 0px rgba(153, 155, 168, 0.25)"
        : "none",
    backgroundColor: palette.common.white,
    borderRadius: "16px",
    height: "100%",
    width: "100%",
  })
);

export const StyledTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
  fontWeight: 700,
}));
export const StyledDescription = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.grey[800],
    marginTop: spacing(1.5),
  })
);
