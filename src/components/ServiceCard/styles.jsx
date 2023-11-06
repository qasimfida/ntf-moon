import { Box, Button, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(
  ({ theme: { palette, spacing, shadows } }) => ({
    background:
      palette.mode === "light" ? palette.common.white : palette.dark[400],
    borderRadius: "16px",
    boxShadow: palette.mode === "light" ? shadows[1] : "none",
    padding: spacing(0, 3),
    paddingTop: spacing(3),
    paddingBottom: spacing(2),
    height: "100%",
    boxSizing: "border-box",
  })
);
export const CardContent = styled(Box)({});
export const ImageWrapper = styled(Box)({
  width: "100%",
  height: "188px",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  },
});
export const StyledTitle = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    fontWeight: 700,
    textTransform: "capitalize",
    marginTop: spacing(3),
    color: palette.common.black,
  })
);
export const StyledDescription = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    marginTop: spacing(1),
    fontWeight: 400,
    lineHeight: "21px",
    color: palette.grey[800],
  })
);
export const StyledButton = styled(Button)(
  ({ theme: { palette, spacing } }) => ({
    marginTop: spacing(1),
    fontWeight: 700,
    lineHeight: "21px",
    color: palette.common.black,
  })
);
