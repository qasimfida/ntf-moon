"use client"

import { Box, Typography, styled } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchMainBox = styled(Box)(({ theme }) => ({
	display: "none",
	position: 'relative',
	[`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
	  display: "flex",
	},
	alignItems: "center",
	width: "400px",
	height: "40px",
	borderRadius: "30px",
	gap: "10px",
  }));
  
  export const TotalLengthBox = styled(Box)(({ theme: {palette} }) => ({
	padding: "5px 10px",
	position: 'absolute',
	right: '15px',
	borderRadius: "30px",
	fontSize: "10px",
	fontWeight: "700",
	gap: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	border: palette.mode === "light"
                  ? "1px solid #CFDBD5"
                  : "1px solid #EBF0F01A",
	color: palette.common.black
  }));
  
  export const LengthTextBox = styled(Box)(({ theme: {palette} }) => ({
	padding: "0px 5px",
	height: "70%",
	borderRadius: "4px",
	fontSize: "10px",
	border: palette.mode === "light" ? "1px solid #000" : "1px solid #fff"
  }));
  
  export const ResultsMainBox = styled(Box)(({ theme: {palette} }) => ({
	position: "absolute",
	width: "100%",
	padding: "16px 14px",
	minHeight: "50px",
	marginTop: "10px",
	borderRadius: "8px",
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	backgroundColor: palette.mode === "light" ? "#fff" : "#272727",
	border: palette.mode === "light" ? "1px solid #000" : "1px solid #FFFFFF80",
	color: palette.mode === "light" ? "#000" : "#fff",
  }));
  
  export const SearchTypeTypography = styled(Typography)(({ theme }) => ({
	width: "100%",
	fontSize: "14px",
  }));
  
  export const CollectionMainBox = styled(Box)(({ theme }) => ({
	padding: "12px 0px",
	display: "flex",
	gap: "10px",
	justifyContent: "space-between",
  }));
  
  export const CollectionBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "3px",
	alignItems: "center",
  }));
  
  export const CollectionNameTypography = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "700",
	marginLeft: "10px",
  }));
  
  export const CollectionCountBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "4px",
	alignItems: "center",
  }));
  
  export const CollectionCountTypography = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "400",
	marginLeft: "10px",
  }));
  
  export const SeeAllMainBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#EBF0F0",
	padding: "8px 14px",
	borderRadius: "30px",
	width: "fit-content",
	cursor: "pointer",
  }));
  
  export const SeeAllTypography = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: "700",
	color: "#000",
  }));
  export const Input = styled('input')(({ theme: { palette} }) => ({
	padding: '0 42px',
	borderRadius: '24px',
	background: palette.mode === 'light'? '#EBF0F080':'#EBF0F01A',
	color: palette.mode === 'light'? '#5D5D5B':'#FFFFFF80',
	border: '0',
	outline: 'none',
	height: '40px',
	width: '100%',
  }));
  export const SearchIcon = styled(Search)(({theme: {palette}})=>({
	position: 'absolute',
	left: '15px',
	color: palette.common.black,
	fontSize: '20px',
	fontWeight: 400,
	lineHeight: '21px',
  }))
  export const SearchWrapper = styled(Box)(({theme: {palette}})=>({
	position: 'relative',
  }))
  