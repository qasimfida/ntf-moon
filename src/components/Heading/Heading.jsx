import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(({ theme, border }) => ({
  background: theme.palette.common.white,
  "&.mt_44": {
    marginTop: theme.spacing(5.25),
    borderBottom: border ? `1px solid ${theme.palette.grey[900]}` : "none",
  },
  h2: {
    color: theme.palette.common.black,
    height: "57px",
    fontWeight: 800,
    textAlign: "center",
  },
}));

export const Heading = ({ title, border, className }) => {
  return (
    <Wrapper border={border} className={className}>
      <Typography variant="h2">{title}</Typography>
    </Wrapper>
  );
};
