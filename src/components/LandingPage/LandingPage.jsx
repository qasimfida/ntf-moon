import { ActiveMintList, UpcommingMintList } from "@/constants";
import { Box, Typography } from "@mui/material";
import ActiveMintCard from "./Home/ActiveMintCard/ActiveMintCard";
import {
  ExpandAllButton,
  StyledContainer,
  ViewMintDetailsButton,
  WalletButton,
} from "./styles";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";

const LandingPage = () => {
  const renderItem = (item, index) => <ActiveMintCard item={item} />;
  const themeMode = useGetActiveTheme();
  return (
    <Box paddingLeft={5} paddingRight={5}>
      <StyledContainer>
        <WalletButton variant="contained" onClick={() => {}}>
          Live Now
        </WalletButton>
        <Typography
          variant="h1"
          color="#fff"
          fontWeight="bold"
          textAlign="center"
          mt={15}
          sx={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Celestial Spirits
        </Typography>
        <Typography
          variant="h6"
          color="#fff"
          fontWeight="bold"
          textAlign="center"
          mt={1}
          sx={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Ends in: 18h 54m 29s
        </Typography>
        <ViewMintDetailsButton variant="contained" onClick={() => {}}>
          View Mint Details
        </ViewMintDetailsButton>
      </StyledContainer>
      <Box
        mt={"47px"}
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        height={50}
        alignItems={"center"}
      >
        <Typography
          fontSize={28}
          fontWeight={"800"}
          color={themeMode == "light" ? "#000" : "#fff"}
        >
          Active Mint
        </Typography>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          height={50}
          alignItems={"center"}
          display={"flex"}
        >
          <ExpandAllButton variant="contained" onClick={() => {}}>
            Expand All
          </ExpandAllButton>
          <Box
            height={40}
            width={40}
            border={`1px solid ${themeMode == "light" ? "#000" : "#fff"}`}
            borderRadius={100}
            ml={1}
          />
          <Box
            height={40}
            width={40}
            border={`1px solid ${themeMode == "light" ? "#000" : "#fff"}`}
            borderRadius={100}
            ml={1}
          />
        </Box>
      </Box>
      <Box
        mt={"37px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        display={"flex"}
        flexDirection={"row"}
      >
        {ActiveMintList.map(renderItem)}
      </Box>

      <Box
        mt={"37px"}
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        height={50}
        alignItems={"center"}
      >
        <Typography
          fontSize={28}
          fontWeight={"800"}
          color={themeMode == "light" ? "#000" : "#fff"}
        >
          Upcomming Mint
        </Typography>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          height={50}
          alignItems={"center"}
          display={"flex"}
        >
          <ExpandAllButton variant="contained" onClick={() => {}}>
            Expand All
          </ExpandAllButton>
          <Box
            height={40}
            width={40}
            border={`1px solid ${themeMode == "light" ? "#000" : "#fff"}`}
            borderRadius={100}
            ml={1}
          />
          <Box
            height={40}
            width={40}
            border={`1px solid ${themeMode == "light" ? "#000" : "#fff"}`}
            borderRadius={100}
            ml={1}
          />
        </Box>
      </Box>
      <Box
        mt={"37px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        display={"flex"}
        flexDirection={"row"}
      >
        {UpcommingMintList.map(renderItem)}
      </Box>
    </Box>
  );
};

export default LandingPage;
