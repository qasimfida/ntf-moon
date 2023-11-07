import { Box, Container, Typography, LinearProgress } from "@mui/material";
import { CustomProgressBar, DateButton, MintBox, WalletButton } from "./styles";
import { Image } from "@mui/icons-material";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";

const ActiveMintCard = ({ item }) => {
  const themeMode = useGetActiveTheme();
  return (
    <MintBox key={item.id}>
      {item.date ? (
        <DateButton variant="contained" onClick={() => {}}>
          {item.date}
        </DateButton>
      ) : (
        <WalletButton variant="contained" onClick={() => {}}>
          Live Now
        </WalletButton>
      )}
      <img
        src={item.image}
        alt="My Image"
        style={{
          maxWidth: "100%",
          borderRadius: 10,
        }}
      />
      <Box>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          mt={1}
          color={themeMode == "light" ? "#000" : "#fff"}
        >
          {item.title}
        </Typography>
        <Box marginTop={2}>
          <Box flexDirection={"row"} display={"flex"}>
            <Typography variant="body2" color={"gray"}>
              Mint Price
            </Typography>
            <Typography
              variant="body2"
              ml={1}
              fontWeight={"bold"}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              {item.mintPrice}
            </Typography>
          </Box>
          <Box flexDirection={"row"} display={"flex"}>
            <Typography variant="body2" color={"gray"}>
              Collection Size
            </Typography>
            <Typography
              variant="body2"
              ml={1}
              fontWeight={"bold"}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              {item.collectionSize}
            </Typography>
          </Box>
        </Box>
      </Box>

      {!item.date && (
        <>
          <Box
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Typography
              variant="body2"
              fontWeight={"bold"}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              {`${item.mintedPercentage}%`}
            </Typography>
            <Typography variant="body2" ml={1} color={"gray"}>
              Minted
            </Typography>
          </Box>
          <CustomProgressBar
            variant="determinate"
            value={item.mintedPercentage}
          />
        </>
      )}
    </MintBox>
  );
};

export default ActiveMintCard;
