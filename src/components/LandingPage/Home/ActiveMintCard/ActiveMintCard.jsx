import {
  Box,
  Container,
  Paper,
  Typography,
  LinearProgress,
} from "@mui/material";
import { CustomProgressBar, DateButton, WalletButton } from "./styles";
import { Image } from "@mui/icons-material";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";

const ActiveMintCard = ({ item }) => {
  const themeMode = useGetActiveTheme();
  return (
    <Box
      height="472px"
      width="302px"
      border={"1px solid gray"}
      borderRadius={10}
      padding={2}
      mt={1}
      key={item.id}
    >
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
          maxWidth: "97%",
          marginTop: "30px",
          marginLeft: "1.5%",
          borderRadius: 10,
        }}
      />
      <Typography
        variant="h5"
        fontWeight={"bold"}
        mt={1}
        color={themeMode == "light" ? "#000" : "#fff"}
      >
        {item.title}
      </Typography>
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
    </Box>
  );
};

export default ActiveMintCard;
