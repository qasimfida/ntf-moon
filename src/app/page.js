"use client";
import { ActiveMintList, RecommendedCollectionList } from "@/constants";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  CarouselContainer,
  CollectionInnerContainer,
  CollectionItem,
  CollectionItemBox,
  CollectionItemNumber,
  CollectionTitle,
  ExpandAllButton,
  ImageSlide,
  ImagesContainer,
  MainBox,
  MainBoxContainer,
  MainCollectionBox,
  OverlappingImage,
  RecommendedCollection,
  Row,
  RowText,
  SliderBox,
  SliderMain,
  Table,
  TableBoxMain,
  TableHead,
  TableHeadText,
  TextContainer,
  TopCollection,
} from "./style";
import { FilterDaysButton } from "./top-selling-nft/styles";
import ActiveMintCard from "@/components/LandingPage/Home/ActiveMintCard/ActiveMintCard";
import { BrowseAllNFTS } from "@/components/BrowseAllNFTS/BrowseAllNFTS";

const daysButton = ["1 Day", "7 Days", "30 Days"];
const tableHeadings = ["Collections", "Volume", "Floor price"];
const data = [
  {
    id: 1,
    name: "Celestial Spirits  asdf as fasf asf fasd fsa df asd f as  asdf asd f asdf a sdf asdfa",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 2,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 3,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 4,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 5,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 6,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
  {
    id: 7,
    name: "Celestial Spirits",
    price: "10,450.00",
    volume: "+18,60%",
    image: "/images/Art.png",
  },
];

const Home = () => {
  const themeMode = useGetActiveTheme();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "/images/home_explore_bg.png",
    "/images/home_explore_bg.png",
    "/images/home_explore_bg.png",
    "/images/home_explore_bg.png",
    "/images/home_explore_bg.png",
  ];

  return (
    <>
      <SliderMain>
        <Box>
          <Typography variant="h1">
            Explore and <br /> collect NFTs
          </Typography>
        </Box>
        <Box>
          <CarouselContainer>
            <Slider {...settings}>
              {images.map((image, index) => (
                <ImageSlide key={index}>
                  <OverlappingImage src={image} alt={`Image ${index + 1}`} />
                </ImageSlide>
              ))}
            </Slider>
          </CarouselContainer>
        </Box>
      </SliderMain>
      <MainBox>
        <TopCollection>
          <Typography variant="h2">Top XRPL Collections</Typography>
          <Box>
            {daysButton.map((item) => (
              <FilterDaysButton key={item} variant="contained">
                {item}
              </FilterDaysButton>
            ))}
          </Box>
        </TopCollection>
        <TableBoxMain>
          <Box>
            <TableHead>
              {tableHeadings?.map((item) => (
                <Box key={item}>
                  <TableHeadText variant="h2" component="h3">
                    {item}
                  </TableHeadText>
                </Box>
              ))}
            </TableHead>
            <Table>
              {data?.map((item, ind) => (
                <Row key={item?.id}>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {ind + 1}
                    </RowText>
                    <Image src={item?.image} width={44} height={44} alt="" />
                    <RowText variant="h2" component="h3">
                      {item?.name}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item?.volume}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item?.price}
                    </RowText>
                  </Box>
                </Row>
              ))}
            </Table>
          </Box>
          <Box>
            <TableHead>
              {tableHeadings?.map((item) => (
                <Box key={item}>
                  <TableHeadText variant="h2" component="h3">
                    {item}
                  </TableHeadText>
                </Box>
              ))}
            </TableHead>
            <Table>
              {data?.map((item, ind) => (
                <Row key={item?.id}>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {ind + 1}
                    </RowText>
                    <Image src={item?.image} width={44} height={44} alt="" />
                    <RowText variant="h2" component="h3">
                      {item?.name}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item?.volume}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item?.price}
                    </RowText>
                  </Box>
                </Row>
              ))}
            </Table>
          </Box>
        </TableBoxMain>
        <RecommendedCollection>Recommended Collections</RecommendedCollection>

        <MainCollectionBox>
          <SliderBox />
          {RecommendedCollectionList.map((item, index) => {
            return (
              <MainBoxContainer>
                <CollectionInnerContainer>
                  <ImagesContainer>
                    <Image
                      src={item.mainImage}
                      alt="Big Image"
                      width={241}
                      height={208}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                    <Box flexDirection={"column"} display={"flex"}>
                      <Image
                        src={item.leftTopImage}
                        alt="Small Image 1"
                        width={109}
                        height={105}
                        style={{
                          padding: "3px",
                          borderRadius: "10px",
                        }}
                      />
                      <Image
                        src={item.leftBottomImage}
                        alt="Small Image 2"
                        width={109}
                        height={105}
                        style={{
                          padding: "3px",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  </ImagesContainer>
                </CollectionInnerContainer>
                <TextContainer>
                  <CollectionTitle>{item.title}</CollectionTitle>
                  <CollectionItemBox>
                    <CollectionItemNumber>{item.items}</CollectionItemNumber>
                    <CollectionItem>items</CollectionItem>
                  </CollectionItemBox>
                </TextContainer>
              </MainBoxContainer>
            );
          })}
          <SliderBox />
        </MainCollectionBox>

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
          {ActiveMintList.map((item, index) => {
            return <ActiveMintCard item={item} />;
          })}
        </Box>
        <BrowseAllNFTS />
      </MainBox>
    </>
  );
};

export default Home;
