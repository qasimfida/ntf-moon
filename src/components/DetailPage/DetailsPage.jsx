import { sliderImages } from "@/constants";
import { Language, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import DiscordIcon from "../Svgs";
import {
  BackgroundBox,
  CustomProgressBar,
  CustomProgressBarWrapper,
  IconWrapper,
  IconsWrapper,
  ImageContainer,
  ImageSliderContainer,
  ImageSliderImage,
  ImageWrapper,
  MintNowButton,
  SeeMoreDetailsText,
  TextWrapper,
  ViewCollectionButton,
} from "./styles";
import TimeLine from "./TimeLine/TimeLine";

export const DetailsPage = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <>
      <ImageContainer>
        <Image
          src="/images/Card.png"
          alt="Logo"
          width={150}
          height={150}
          style={{
            border: "5px solid #fff",
            borderRadius: "10px",
            position: "absolute",
            transform: "translate(30%, 300px)",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <ViewCollectionButton>View Collection</ViewCollectionButton>
      </ImageContainer>
      <IconsWrapper>
        <IconWrapper href="#">
          <DiscordIcon />
        </IconWrapper>
        <IconWrapper href="#">
          <Twitter />
        </IconWrapper>
        <IconWrapper href="#">
          <Language />
        </IconWrapper>
      </IconsWrapper>

      <TextWrapper>
        <Box>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color={themeMode == "light" ? "#000" : "#fff"}
          >
            Celestial Spirits
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={"#7A52F4"}
            fontSize={13}
          >
            @MoonWorld
          </Typography>
        </Box>
        <Box flexDirection={"row"} display={"flex"}>
          <Box flexDirection={"row"} display={"flex"}>
            <Typography variant="body2" color={"gray"}>
              Price
            </Typography>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              ml={1}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              150 XRP
            </Typography>
          </Box>
          <Box flexDirection={"row"} display={"flex"} ml={2}>
            <Typography variant="body2" color={"gray"}>
              Collection Size
            </Typography>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              ml={1}
              color={themeMode == "light" ? "#000" : "#fff"}
            >
              2222
            </Typography>
          </Box>
        </Box>
      </TextWrapper>
      <TextWrapper>
        <Typography
          variant="body2"
          mt={2}
          fontSize={12}
          color={themeMode == "light" ? "#000" : "#fff"}
        >
          Prepare for the launch of the groundbreaking Celestial Spirit
          Collection, an NFT project poised to revolutionize the XRP Ledger
          (XRPL) ecosystem.
        </Typography>
      </TextWrapper>
      <SeeMoreDetailsText variant="body2">see more details</SeeMoreDetailsText>

      <CustomProgressBarWrapper>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          color={themeMode == "light" ? "#000" : "#fff"}
        >
          {`945 / 2222`}
        </Typography>
        <CustomProgressBar variant="determinate" value={67} />
      </CustomProgressBarWrapper>
      <MintNowButton>Mint Now</MintNowButton>
      <Box>
        <BackgroundBox />
        <ImageSliderContainer>
          {sliderImages.map((image, index) => (
            <ImageWrapper>
              <ImageSliderImage
                key={index}
                src={"/images/Alean.png"}
                alt={`Image ${index}`}
              />
            </ImageWrapper>
          ))}
        </ImageSliderContainer>
      </Box>

      <Typography
        fontWeight={"bold"}
        variant={"h3"}
        textAlign={"center"}
        mt={2}
      >
        Road Map
      </Typography>

      <TimeLine />
    </>
  );
};
