import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lightPalette = {
  primary: {
    main: "#7A52F4",
    dark: "#6242c3",
    light: "#e4dcfd",
  },
  secondary: {
    main: "#f4c952",
    light: "#fff5d9",
  },
  error: {
    main: "#F20089",
    light: "#fdd9ed",
  },
  success: {
    main: "#03db80",
    light: "#03db80",
  },
  dark: {
    400: "#393D3B",
    600: "#262626",
    600: "#000000",
  },
  grey: {
    light: "#CCCCCC",
    main: "#7F7F7F",
    dark: "#4D4D4D",
    400: "#f5f7f7",
    600: "#b0b2b1",
    700: "#CFDBD5",
    800: "#5D5D5B",
    900: "#8e9392",
    1000: "#EBF0F080",
  },
  common: {
    black: "#000",
    white: "#fff",
    grey: "#F5F8F8",
  },
};

const darkPalette = {
  primary: {
    main: "#7A52F4",
    dark: "#6242c3",
    light: "#e4dcfd",
  },
  secondary: {
    main: "#f4c952",
    light: "#fff5d9",
  },
  error: {
    main: "#F20089",
    light: "#fdd9ed",
  },
  success: {
    main: "#03db80",
    light: "#03db80",
  },
  common: {
    black: "#fff",
    white: "#fff",
    grey: "#181818",
  },
  grey: {
    light: "#CCCCCC",
    main: "#7F7F7F",
    dark: "#4D4D4D",
    400: "#f5f7f7",
    600: "#b0b2b1",
    700: "#CFDBD5",
    800: "#FFFFFF80",
    900: "#8e9392",
    1000: "#EBF0F080",
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
    },
    shadows: [
      "none",
      "0px 3px 4px 0px rgba(153, 155, 168, 0.25), 0px 3px 4px 0px rgba(153, 155, 168, 0.25), 0px 3px 4px 0px rgba(153, 155, 168, 0.25)", // 1
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      "0px 4px 4px rgba(0,0,0,0.25)",
      "0px 5px 5px rgba(0,0,0,0.25)",
      "0px 6px 6px rgba(0,0,0,0.25)",
      "0px 7px 7px rgba(0,0,0,0.25)",
      "0px 8px 8px rgba(0,0,0,0.25)",
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
              fontWeight: "900",
              fontSize: ".875rem",
              padding: "12px 26px",
            },
          },
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
