import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    minHeight: "328px",
    backgroundImage: `url('${
      palette.mode === "dark"
        ? "/images/common-banner-dark.png"
        : "/images/common-banner-light.png"
    }')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    paddingLeft: spacing(10.2),
    boxShadow: "0px 11px 17px 0px rgba(255, 255, 255, 0.27)",
    h1: {
      fontWeight: 800,
      color: "#fff",
      textAlign: "center",
    },
    [breakpoints.down("sm")]: {
      paddingLeft: spacing(3),
    },
  })
);
