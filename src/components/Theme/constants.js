import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Define your custom colors here
const lightPalette = {
  primary: {
    main: '#7A52F4',
    dark: '#6242c3',
    light: '#e4dcfd'
  },
  secondary: {
    main: '#f4c952',
    light: '#fff5d9'
  },
  grey: {
    light: "#CCCCCC",
    main: "#7F7F7F",
    dark: "#4D4D4D",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
  },
  background: {
    default: "#f2f2f2",
    paper: "#ffffff",
  },
  common: {
    white: "#ffffff",
  },
  black: {
    main: "#000000",
  },
  grey: {
    400: '#D9D9D9',
    600: '#b0b2b1',
    800: '#5D5D5B'
  }
};

const darkPalette = {
  primary: {
    main: '#7A52F4',
    dark: '#6242c3',
    light: '#e4dcfd'
  },
  secondary: {
    main: '#f4c952',
    light: '#fff5d9'
  },
  grey: {
    light: "#CCCCCC",
    main: "#7F7F7F",
    dark: "#4D4D4D",
  },
  text: {
    primary: "#ffffff",
    secondary: "#ffffff",
  },
  background: {
    default: "#121212",
    paper: "#121212",
  },
  common: {
    white: "#ffffff",
  },
  black: {
    main: "#000000",
    dark: "#262626",
    light: "#5d5d5b",
  },
};

const breakpoints= {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
}

export const theme = (mode) => createTheme({
  palette: {
    mode: mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
    common: {
      black: mode === 'light' ? '#000' : '#fff',
      white: mode === 'light' ? '#fff' : '#000',
    },
    typography: {
      color: mode === 'light' ? "#000" : "#fff",
    },
    tokenHoverColor: {
      color: "#D9D9D9",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    boxShadow: {
      appBar: "0px 3px 4px 0px rgba(153, 155, 168, 0.25)",
    },
    typography: {
      main: "#5D5D5B",
    },
    borderColor: {
      main: "#5D5D5B",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: { fontSize: '42px', color: '#000' },
    h2: { fontSize: '34px', color: '#000' },
    h3: { fontSize: '28px', color: '#000' },
    h4: { fontSize: '24px', color: '#000' },
    h5: { fontSize: '20px', color: '#000' },
    color: '#000'
  },
  breakpoints: { values: breakpoints },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          [`@media (min-width: ${breakpoints.sm}px)`]: {
            maxWidth: '568px',
          },
          [`@media (min-width: ${breakpoints.md}px)`]: {
            maxWidth: '928px',
          },
          [`@media (min-width: ${breakpoints.lg}px)`]: {
            maxWidth: '1200px',
          },
          [`@media (min-width: ${breakpoints.xl}px)`]: {
            maxWidth: '1300px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          padding: '10px 14px',
          fontSize: '14px',
          textTransform: 'unset',
          lineHeight: '21px'

        },
        sizeSmall: {
          height: '32px',
          fontSize: '12px',
          padding: '8px 12px',
          lineHeight: '18px'
        },
        sizeMedium: {
          height: '40px',
          lineHeight: '18px'

        },
        sizeLarge: {
          height: '46px',
          padding: '12px 16px',
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
              mode === "light" ? lightPalette.grey.dark : darkPalette.grey.dark,
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
  }});
