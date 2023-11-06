import { Box, Typography, styled } from "@mui/material";

export const TimeLineItemNoText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "28px",
    fontWeight: "bold",
  })
);

export const NumberConatiner = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    height: 92,
    width: 92,
    border: "3px solid #7A52F4",
    borderRadius: 100,
    paddingTop: 2.2,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);
