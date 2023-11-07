"use client";
import { ActiveMintList, RecommendedCollectionList } from "@/constants";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  CollectionCard,
  MainBox,
  RecommendedCollections,
  Row,
  RowText,
  SectionHeading,
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
        <RecommendedCollections>
          <SectionHeading>Recommended Collections</SectionHeading>
          <Box>
            {new Array(3).fill(0).map((val, ind) => (
              <Box key={val}>
                <CollectionCard>
                  <Box>
                    <Image
                      src="/images/Art.png"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                    <Box>
                      <Image
                        src="/images/Art.png"
                        width={1000}
                        height={1000}
                        alt=""
                      />
                      <Image
                        src="/images/Art.png"
                        width={1000}
                        height={1000}
                        alt=""
                      />
                    </Box>
                  </Box>
                  <Typography variant="h2">Celestial Spirits</Typography>
                  <Typography variant="h3">
                    2222 <span>items</span>
                  </Typography>
                  {/* <Box>
            <Image src="/images/Art.png" height={208} width={241} alt="" />
            <Box>
              <Image src="/images/Art.png" height={98} width={109} alt="" />
              <Image src="/images/Art.png" height={98} width={109} alt="" />
            </Box>
          </Box> */}
                </CollectionCard>
              </Box>
            ))}
          </Box>
        </RecommendedCollections>
      </MainBox>
    </>
  );
};

export default Home;
