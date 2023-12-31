"use client";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import {
  MainBox,
  Row,
  RowText,
  SliderMain,
  Table,
  TableBoxMain,
  TableHead,
  TableHeadText,
  TopCollection,
} from "./style";
import { Box, Typography } from "@mui/material";
import { FilterDaysButton } from "./top-selling-nft/styles";
import Image from "next/image";

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

  return (
    <>
      <SliderMain>
        <Box>
          <Typography variant="h1">
            Explore and <br /> collect NFTs
          </Typography>
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
      </MainBox>
    </>
  );
};

export default Home;
