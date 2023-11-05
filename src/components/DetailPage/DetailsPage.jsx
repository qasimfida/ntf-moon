import { SectionHeading } from "@/app/style";
import { sliderImages } from "@/constants";
import { Language, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import DiscordIcon from "../Svgs";
import TimeLine from "./TimeLine/TimeLine";
import {
  BackgroundBox,
  CenterImagesBox,
  CustomProgressBar,
  CustomProgressBarWrapper,
  DetailProfilePicBox,
  DetailProfileSection,
  IconWrapper,
  IconsWrapper,
  ImageContainer,
  ImageSliderContainer,
  ImageSliderImage,
  ImageWrapper,
  MintNowButton,
  ProfileDeatislTextSextion,
  ProfileDetailsSection,
  ProgressMainBox,
  RoadMapSection,
  SeeMoreBox,
  SeeMoreDetailsText,
  TextWrapper,
  ViewCollectionButton,
} from "./styles";

export const DetailsPage = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  return (
    <>
      <ImageContainer>
        <DetailProfileSection>
          <DetailProfilePicBox>
            <Image
              src="/images/details-profile-pic.png"
              alt="Logo"
              width={150}
              height={150}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </DetailProfilePicBox>
          <ViewCollectionButton>View Collection</ViewCollectionButton>
        </DetailProfileSection>
      </ImageContainer>
      <ProfileDetailsSection>
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

        <ProfileDeatislTextSextion>
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
          <SeeMoreBox>
            <SeeMoreDetailsText variant="body2">
              see more details
            </SeeMoreDetailsText>
          </SeeMoreBox>

          <ProgressMainBox>
            <CustomProgressBarWrapper>
              <p>{`945 / 2222`}</p>
              <CustomProgressBar variant="determinate" value={67} />
            </CustomProgressBarWrapper>
            <MintNowButton variant="contained">Mint Now</MintNowButton>
          </ProgressMainBox>
        </ProfileDeatislTextSextion>
      </ProfileDetailsSection>
      <CenterImagesBox>
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
      </CenterImagesBox>

      <RoadMapSection>
        <SectionHeading variant="h2">Road Map</SectionHeading>
        <TimeLine />
      </RoadMapSection>
    </>
  );
};
