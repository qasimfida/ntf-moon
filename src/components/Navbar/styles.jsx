"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Switch,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme: { palette, transitions } }) => ({
  width: 40,
  height: 22,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    top: "unset",
    transitionDuration: "300ms",
    transform: "translateX(4px)",
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          palette.mode === "dark" ? palette.primary.main : palette.common.light,
        opacity: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#7A52F4",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: palette.mode === "light" ? palette.grey[100] : palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    height: "14px",
    width: "14px",
    backgroundColor: palette.common.black,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: palette.mode === "light" ? "#fff" : palette.primary.main,
    opacity: 1,
    border: `1px solid ${
      palette.mode === "light" ? palette.grey[900] : palette.grey[900]
    }`,
    transition: transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme: { palette, mode } }) => ({
  backgroundColor: palette.common.white,
  height: "84px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  boxShadow: "none",
}));

export const StyledToolbar = styled(Toolbar)(
  ({ theme: { palette, mode, breakpoints } }) => ({
    width: "100%",
    height: "100%",
    padding: "0px 10px",
    boxShadow: "0px 3px 4px 0px rgba(153, 155, 168, 0.25)",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      padding: "0px 40px",
    },
  })
);

export const StyledIconButton = styled(IconButton)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "none",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      display: "flex",
    },
  })
);

export const StyledMobileIconButton = styled(IconButton)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      display: "none",
    },
  })
);

export const StyledSwitchBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "none",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      display: "flex",
    },
    justifyContent: "flex-end",
    mx: 2,
  })
);

export const StyledIOSSwitch = styled(IOSSwitch)(
  ({ theme: { palette, breakpoints } }) => ({
    color: "inherit",
    backgroundColor: "inherit",
    margin: "0px 5px",
  })
);

export const StyledIconBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    flexGrow: 0,
    display: "flex",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      display: "none",
    },
  })
);

export const StyledMenu = styled(Menu)(({ theme }) => ({
  display: { xs: "block", md: "none" },
}));

export const StyledMenuItemTypography = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    textAlign: "center",
    color: palette.common.black,
  })
);

export const MobileIconsBox = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    display: "none",
  },
  alignItems: "center",
}));

export const StyledBox2 = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "20px",
  })
);

export const LinksMainBox = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    display: "none",
  },
  gap: "20px",
}));

export const TokenMainBox = styled(Button)(({ theme: { palette } }) => ({
  padding: "8px 16px",
  width: "160px",
  maxWidth: "160px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent",
  transition: "background-color 0.3s",
  color: palette.grey[800],
  border: `1px solid ${palette.grey[600]}`,
  fontWeight: 700,

  "&:hover": {
    border: `1px solid ${palette.grey[600]}`,
    background: palette.grey[400],
    color: palette.grey.main,
  },
}));

export const TokenTypography = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "14px",
    color: palette.primary.dark,
    fontSize: "14px",
  })
);

export const AvatarIconButton = styled(IconButton)(
  ({ theme: { palette, breakpoints } }) => ({
    padding: "0px",
  })
);

export const WalletButton = styled(Button)(() => ({
  width: "160px",
}));

export const StyledLink = styled(Link)(({ theme: { palette } }) => {
  return {
    color: palette.mode === "light" ? "#5D5D5B" : "#FFFFFF80",
    fontWeight: 700,
    "&.active": {
      color: palette.common.black,
    },
  };
});
