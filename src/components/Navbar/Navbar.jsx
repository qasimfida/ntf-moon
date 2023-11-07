"use client";
import { pages } from "@/constants";
import { changeThemeMode } from "@/redux/theme/themeSlice";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import {
  AvatarIconButton,
  LinksMainBox,
  MobileIconsBox,
  StyledAppBar,
  StyledBox2,
  StyledIOSSwitch,
  StyledIconBox,
  StyledIconButton,
  StyledLink,
  StyledMenu,
  StyledMenuItemTypography,
  StyledMobileIconButton,
  StyledSwitchBox,
  StyledToolbar,
  TokenMainBox,
  WalletButton,
} from "./styles";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [tokenVisibility, setTokenVisibility] = useState(false);

  const themeMode = useSelector((state) => state.theme.themeMode);
  const dispatch = useDispatch();
  const pathName = usePathname();

  const handleChangeThemeMode = () => {
    dispatch(changeThemeMode(themeMode === "light" ? "dark" : "light"));
    localStorage.setItem("theme", themeMode === "light" ? "dark" : "light");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <StyledIconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </StyledIconButton>

        <SearchBar />

        <StyledSwitchBox>
          <StyledIOSSwitch
            {...label}
            checked={themeMode === "light" ? false : true}
            onChange={() => {
              handleChangeThemeMode();
            }}
          />
        </StyledSwitchBox>

        <StyledIconBox>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon color="primary" />
          </IconButton>
          <StyledMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <StyledMenuItemTypography component="a">
                  {page.name}
                </StyledMenuItemTypography>
              </MenuItem>
            ))}
          </StyledMenu>
        </StyledIconBox>

        <MobileIconsBox>
          <StyledMobileIconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </StyledMobileIconButton>
          <StyledIOSSwitch
            {...label}
            checked={themeMode === "light" ? false : true}
            onChange={() => {
              handleChangeThemeMode();
            }}
          />
        </MobileIconsBox>

        <StyledBox2>
          <LinksMainBox
            sx={{ display: { xs: "none", md: "flex", gap: "20px" } }}
          >
            {pages.map((page, index) => (
              <StyledLink
                href={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                className={pathName === page.path ? "active" : ""}
              >
                {page.name}
              </StyledLink>
            ))}
          </LinksMainBox>

          {tokenVisibility ? (
            <>
              <TokenMainBox variant="outlined">rPyPN...revTR</TokenMainBox>
              <AvatarIconButton>
                <Avatar alt="Remy Sharp" src="/images/images/avatar/2.jpg" />
              </AvatarIconButton>
            </>
          ) : (
            <WalletButton
              variant="contained"
              onClick={() => {
                setTokenVisibility(!tokenVisibility);
              }}
            >
              Connect Wallet
            </WalletButton>
          )}
        </StyledBox2>
      </StyledToolbar>
    </StyledAppBar>
  );
};
