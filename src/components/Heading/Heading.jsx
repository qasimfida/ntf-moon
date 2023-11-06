import { Box, styled, Typography } from "@mui/material";

export const Wrapper = styled(Box)(({ theme, border }) => ({
  background: theme.palette.common.white,
  "&.mt_44": {
    marginTop: theme.spacing(5.25),
  },
  borderBottom: border ? `1px solid ${theme.palette.grey[600]}` : "none",
  h2: {
    textTransform: "capitalize",
    color: theme.palette.common.black,
    height: "57px",
    fontWeight: 800,
    textAlign: "center",
  },
}));

export const Heading = ({ title, border, className, ...rest }) => {
  console.log();
  return (
    <Wrapper {...rest} border={border} className={className}>
      <Typography variant="h2">{title}</Typography>
    </Wrapper>
  );
};
