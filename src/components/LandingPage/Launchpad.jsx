import { ActiveMintList, UpcommingMintList } from "@/constants";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box, Typography } from "@mui/material";
import ActiveMintCard from "./Home/ActiveMintCard/ActiveMintCard";
import {
  ExpandAllButton,
  StyledContainer,
  ViewMintDetailsButton,
  WalletButton,
} from "./styles";

const Launchpad = () => {
  const renderItem = (item, index) => <ActiveMintCard item={item} />;
  const themeMode = useGetActiveTheme();
  return (
    <>
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
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"20px"}
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
        my={"37px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        display={"flex"}
        flexDirection={"row"}
        gap={"20px"}
      >
        {ActiveMintList.map(renderItem)}
      </Box>

      <Box
        mt={"37px"}
        flexDirection={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"20px"}
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
        my={"37px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        display={"flex"}
        flexDirection={"row"}
        gap={"20px"}
      >
        {UpcommingMintList.map(renderItem)}
      </Box>
    </>
  );
};

export default Launchpad;
