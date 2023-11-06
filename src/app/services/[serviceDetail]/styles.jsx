import { Box, Grid, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme: { palette } }) => ({
  backgroundColor: palette.common.white,
}));
export const Details = styled(Box)(({ theme: { spacing } }) => ({
  marginTop: spacing(4.5),
  "&.pb-100": {
    paddingBottom: spacing(12.7),
  },
}));
export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  },
}));
export const HeadingWrapper = styled(Box)(
  ({ theme: { spacing, breakpoints } }) => ({
    marginTop: spacing(7.6),
    marginBottom: spacing(3.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiBox-root": {
      maxWidth: "38%",
    },
    [breakpoints.down("md")]: {
      marginTop: spacing(3),
      marginBottom: spacing(2),
      "& .MuiBox-root": {
        maxWidth: "100%",
      },
    },
    h2: {
      width: "fit-content",
    },
  })
);
export const Section = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginTop: spacing(6),
}));
export const BackgroundBanner = styled(Box)(({ theme: { palette, mode } }) => ({
  backgroundColor:
    mode === "light" ? palette.primary.light : palette.primary.main,
  width: "100%",
  height: "154px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
}));
export const AnimationImage = styled(Box)(
  ({ theme: { palette, spacing } }) => ({
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 999,
    padding: spacing(2.5, 3),
    background: palette.common.white,
    borderRadius: "16px",
    border: `1px solid ${palette.grey[700]}`,
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      objectFit: "cover",
    },
  })
);
export const HeadingTwo = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: spacing(5),
  h3: {
    width: "fit-content",
    padding: spacing(1.5, 5.5),
  },
}));
export const StyledOfferTypo = styled(Typography)(({ theme: { palette } }) => ({
  fontWeight: 700,
  color: palette.common.black,
  textAlign: "center",
  borderBottom: `1px solid ${palette.grey[600]}`,
}));
export const VisionDescription = styled(Typography)(
  ({ theme: { spacing, palette, breakpoints } }) => ({
    marginTop: spacing(5),
    marginBottom: spacing(8.5),
    padding: spacing(3),
    textAlign: "center",
    lineHeight: "21px",
    color: palette.grey[800],
    [breakpoints.down("sm")]: {
      marginTop: spacing(3),
      padding: spacing(0),
    },
  })
);
export const ContactUs = styled(Box)(({ theme: { spacing, palette } }) => ({
  display: "flex",
  alignItems: "center",
  padding: spacing(0.8, 2.6),
  gap: spacing(2),
  width: "fit-content",
  borderRadius: "16px",
  margin: "auto",
  background: palette.common.white,
  boxShadow: "0px 3px 4px 0px rgba(153, 155, 168, 0.25)",
}));
export const ContactText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
  fontWeight: 700,
}));
