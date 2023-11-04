"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box
} from "@mui/material";
import Image from "next/image";
import {
  FilterBox,
  FilterButton,
  FilterDaysButton,
  LoadMoreButton,
  MainBox,
  MainHeading,
  Row,
  RowText,
  Table,
  TableBox,
  TableBoxMain,
  TableHead,
  TableHeadText
} from "./styles";

const daysButton = ["1 Day", "7 Days", "30 Days", "All Time"];
const tableHeadings = [
  "Collections",
  "Volume",
  "24h %",
  "7h %",
  "Floor price",
  "Owners",
  "Items",
];
const data = [
  {
    id: 1,
    name: "Celestial Spirits  asdf as fasf asf fasd fsa df asd f as  asdf asd f asdf a sdf asdfa",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 2,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 3,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 4,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 5,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 6,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
  {
    id: 7,
    name: "Celestial Spirits",
    price: "10,450.00",
    priceChange: "-10,00%",
    volume: "+18,60%",
    sales: "4,915",
    owners: "6.3k",
    total: "2222",
    image: "/images/Art.png",
  },
];

const page = () => {
  return (
    <>
      <MainBox>
        <MainHeading variant="h1" component="h2">
          Top selling NFTs
        </MainHeading>
        <FilterBox>
          <Box>
            <FilterButton variant="contained" startIcon={<DeleteIcon />}>
              Blockchain
            </FilterButton>
            <FilterButton variant="contained" startIcon={<DeleteIcon />}>
              Category
            </FilterButton>
          </Box>
          <Box>
            {daysButton.map((item) => (
              <FilterDaysButton key={item} variant="contained">
                {item}
              </FilterDaysButton>
            ))}
          </Box>
        </FilterBox>
        <TableBoxMain>
          <TableBox>
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
                    <Image src={item.image} width={44} height={44} alt="" />
                    <RowText variant="h2" component="h3">
                      {item.name}
                    </RowText>
                  </Box>
                  <Box>
                    <Image
                      src="/images/doubleArrow.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <RowText variant="h2" component="h3">
                      {item.price}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item.priceChange}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item.volume}
                    </RowText>
                  </Box>
                  <Box>
                    <Image
                      src="/images/doubleArrow.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <RowText variant="h2" component="h3">
                      {item.sales}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item.owners}
                    </RowText>
                  </Box>
                  <Box>
                    <RowText variant="h2" component="h3">
                      {item.total}
                    </RowText>
                  </Box>
                </Row>
              ))}
            </Table>
          </TableBox>
        </TableBoxMain>
        <LoadMoreButton variant="contained">Load More</LoadMoreButton>
      </MainBox>
    </>
  );
};

export default page;
