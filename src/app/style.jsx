"use client";

import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  backgroundColor: palette.common.white,
  padding: "1rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    padding: "2rem",
  },
}));

export const SliderMain = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    height: 666,
    padding: "1rem",
    backgroundImage: `url("/images/home_slider_bg.png")`,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      padding: "2rem",
    },
    "&& div:nth-child(1)": {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: 470,
      width: 441,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 57,
      backgroundImage: `url("/images/home_explore_bg.png")`,
      // backgroundColor: "#0f0f0f",
      borderRadius: 15,
      [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
        height: 470,
        width: 441,
      },
    },
    "&& Box:nth-child(2)": {
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 57,
      // backgroundColor: "#0f0f0f",
      borderRadius: 15,
      [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
        height: 470,
        width: 441,
      },
    },
    "& h1": {
      color: "#fff",
      fontSize: 42,
      fontWeight: 800,
      textAlign: "center",
      lineHeight: "normal",
      borderRadius: "18px",
      boxShadow: "0px 8px 12px 0px rgba(153, 155, 168, 0.25)",
    },
  })
);

export const TopCollection = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "5px 0px",
    backgroundColor: palette.common.white,
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      //   width: "100%",
    },
    "&& h2": {
      color: palette.text.primary,
      fontSize: 28,
      fontWeight: 800,
      lineHeight: "normal",
      borderRadius: 18,
      padding: "9px 15px",
      boxShadow: "0px 8px 12px 0px rgba(153, 155, 168, 0.25)",
    },
    "&& div:nth-child(2)": {
      display: "flex",
      gap: 6,
    },
  })
);

export const TableBoxMain = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.common.white,
    display: "flex",
    gap: 48,
    width: "100%",
    [breakpoints.down("md")]: {},
    "&& div": {
      width: "100%",
    },
  })
);

export const TableHead = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  width: "100%",
  padding: "10px 16px",
  [breakpoints.down("md")]: {
    fontSize: "28px",
  },

  "&& > div": {
    width: "15%",
  },
  "&& > div:nth-child(1)": {
    width: "70%",
  },
}));

export const TableHeadText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "18px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const Table = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    gap: "8px",
  },
}));

export const Row = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  minHeight: "68px",
  borderRadius: "8px",
  padding: "10px 16px",
  border: `1px solid ${palette.inherit.main}`,

  // border: `1px solid ${palette.borderColor.primary}`,
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    // flexDirection: "row",
  },
  "&& > div": {
    width: "15%",
  },
  "&& > div:nth-child(1)": {
    width: "70%",
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
}));

export const RowText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const SectionHeading = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 800,
    margin: "10px 0px",
    lineHeight: "27px",
    [breakpoints.down("md")]: {
      fontSize: "20px",
    },
  })
);
export const CarouselContainer = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    gap: -25,
    width: "100%",
    overflow: "hidden",
    justifyContent: "space-between",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      padding: "2rem",
    },
  })
);
export const ImageSlide = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    position: "relative",
    width: "50%",
    height: 300,
    background: "#f0f0f0",
    overflow: "hidden",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  })
);

export const OverlappingImage = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  })
);

export const RecommendedCollection = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "28px",
    fontWeight: 800,
    marginTop: 30,
    marginBottom: 30,
    color: palette.text.primary,
  })
);

export const MainBoxContainer = styled(Box)(
  ({ theme: { palette, breakpoints }, item }) => ({
    height: 324,
    width: 370,
    backgroundColor: palette.common.white,
    boxShadow: "0px 8px 12px 0px rgba(153, 155, 168, 0.25)",
    borderRadius: 15,
    // marginTop: 20,

    [breakpoints.down("md")]: {
      marginTop: 10,
      marginBottom: 10,
    },
  })
);

export const MainCollectionBox = styled(Box)(
  ({ theme: { palette, breakpoints }, item }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",

    [breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  })
);

export const CollectionInnerContainer = styled(Box)(
  ({ theme: { palette, breakpoints }, item }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: "0px 18px",

    [breakpoints.down("md")]: {},
  })
);

export const ImagesContainer = styled(Box)(
  ({ theme: { palette, breakpoints }, item }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px 0px",
    width: "100%",
    height: "80%",

    [breakpoints.down("md")]: {},
  })
);

export const TextContainer = styled(Box)(
  ({ theme: { palette, breakpoints }, item }) => ({
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      padding: "0px 30px",
    },
  })
);

export const CollectionTitle = styled(Typography)(
  ({ theme: { palette, breakpoints }, item }) => ({
    fontSize: "18px",
    fontWeight: 800,
    color: palette.text.primary,

    [breakpoints.down("md")]: {},
  })
);
export const CollectionItemBox = styled(Typography)(
  ({ theme: { palette, breakpoints }, item }) => ({
    flexDirection: "row",
    display: "flex",
    height: 20,
    alignItems: "center",

    [breakpoints.down("md")]: {},
  })
);
export const CollectionItemNumber = styled(Typography)(
  ({ theme: { palette, breakpoints }, item }) => ({
    fontSize: "14px",
    fontWeight: 700,
    color: palette.text.primary,

    [breakpoints.down("md")]: {},
  })
);

export const CollectionItem = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    marginLeft: 3,
    color: palette.text.disabled,

    [breakpoints.down("md")]: {},
  })
);
export const SliderBox = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    height: 46,
    width: 46,
    borderRadius: 100,
    backgroundColor: "transparent",
    border: `1px solid ${palette.inherit.main}`,

    [breakpoints.down("md")]: {},
  })
);

export const ExpandAllButton = styled(Button)(({ theme }) => ({
  width: "133px",
  height: "46px",
  backgroundColor: "#7A52F4",
  color: "#fff",

  [theme.breakpoints.down("sm")]: {
    width: "133px",
    height: "46px",
  },
}));
