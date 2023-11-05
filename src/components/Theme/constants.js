import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lightPalette = {
  inherit: {
    main: "#000",
  },
  primary: {
    main: "#7A52F4",
    dark: "#6242c3",
    light: "#e4dcfd",
  },
  secondary: {
    main: "#f4c952",
    light: "#fff5d9",
  },
  grey: {
    light: "#CCCCCC",
    main: "#7F7F7F",
    dark: "#4D4D4D",
    400: "#f5f7f7",
    600: "#b0b2b1",
    800: "#5D5D5B",
    900: "#979797",
    1000: "#EBF0F080",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
    red: "#f71111",
    green: "#03DB80",
  },
  background: {
    default: "#f2f2f2",
    paper: "#ffffff",
  },
  common: {
    white: "#000",
  },
  boxShadow: {
    appBar: "0px 3px 4px 0px rgba(255, 255, 255, 0.25)",
  },
  grey: {
    400: "#f5f7f7",
    600: "#b0b2b1",
    800: "#5D5D5B",
    900: "#8e9392",
  },
  dark: {
    400: "#393D3B",
  },
};

const darkPalette = {
  inherit: {
    main: "#fff",
  },
  primary: {
    main: "#7A52F4",
    dark: "#6242c3",
    light: "#e4dcfd",
  },
  secondary: {
    main: "#f4c952",
    light: "#fff5d9",
  },
  common: {
    white: "#fff",
  },
  boxShadow: {
    appBar: "0px 3px 4px 0px rgba(255, 255, 255, 0.25)",
  },
  grey: {
    400: "#171818",
    600: "#b0b2b1",
    800: "#5D5D5B",
    900: "#8e9392",
  },
  dark: {
    400: "#393D3B",
  },
};

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "light" ? lightPalette : darkPalette),
      common: {
        black: mode === "light" ? "#000" : "#fff",
        white: mode === "light" ? "#fff" : "#000",
      },
      tokenHoverColor: {
        color: "#D9D9D9",
      },

      boxShadow: {
        appBar: "0px 3px 4px 0px rgba(255, 255, 255, 0.25)",
      },
      borderColor: {
        main: "#5D5D5B",
      },
    },
    shadows: [
      "none",
      "0px 3px 4px 0px rgba(153, 155, 168, 0.25), 0px 3px 4px 0px rgba(153, 155, 168, 0.25), 0px 3px 4px 0px rgba(153, 155, 168, 0.25)", // 1
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    ],
    typography: {
      fontFamily: inter.style.fontFamily,
      h1: { fontSize: "42px" },
      h2: { fontSize: "24px" },
      h3: { fontSize: "16px", lineHeight: "24px" },
      h4: { fontSize: "24px" },
      h5: { fontSize: "20px" },
      body1: {
        fontSize: "16px",
      },
      body2: {
        fontSize: "14px",
      },
      caption: {
        fontSize: "12px",
      },
      color: mode === "light" ? "#fff" : "#fff",
      main: "#5D5D5B",
    },
    breakpoints: { values: breakpoints },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "16px",
            paddingRight: "16px",
            [`@media (min-width: ${breakpoints.sm}px)`]: {
              maxWidth: "568px",
            },
            [`@media (min-width: ${breakpoints.md}px)`]: {
              maxWidth: "928px",
            },
            [`@media (min-width: ${breakpoints.lg}px)`]: {
              maxWidth: "1200px",
            },
            [`@media (min-width: ${breakpoints.xl}px)`]: {
              maxWidth: "1300px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: inter.style.fontFamily,
            borderRadius: "24px",
            padding: "10px 14px",
            fontSize: "14px",
            textTransform: "unset",
            lineHeight: "21px",
          },
          sizeSmall: {
            height: "32px",
            fontSize: "12px",
            padding: "8px 12px",
            lineHeight: "18px",
          },
          sizeMedium: {
            height: "40px",
            lineHeight: "18px",
          },
          sizeLarge: {
            height: "46px",
            padding: "12px 16px",
          },
        },
      },
      spacing: 8,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "1.8rem",
              fontWeight: "700",
              fontSize: ".875rem",
              padding: "12px 26px",
            },
          },
          variants: [
            {
              props: { variant: "outlined", color: "primary" },
              style: {
                border: `1px solid ${
                  mode === "light"
                    ? lightPalette.primary.main
                    : darkPalette.common.white
                }`,
                color:
                  mode === "light"
                    ? lightPalette.primary.main
                    : darkPalette.common.white,
              },
            },
            {
              props: { variant: "outlined", color: "grey" },
              style: {
                border: `1px solid ${
                  mode === "light"
                    ? lightPalette.grey.main
                    : darkPalette.grey.white
                }`,
                color:
                  mode === "light"
                    ? lightPalette.grey.main
                    : darkPalette.common.white,
              },
            },
          ],
        },
        MuiBox: {
          styleOverrides: {
            root: {
              backgroundColor:
                mode === "light"
                  ? lightPalette.grey.dark
                  : darkPalette.grey.dark,
            },
          },
        },
        MuiAlert: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.severity === "info" && {
                backgroundColor: mode === "light" ? "#60a5fa" : "#bb86fc",
              }),
            }),
          },
        },
      },
    },
  });
