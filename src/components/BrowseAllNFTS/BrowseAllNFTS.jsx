"use client";

import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  ButtonContainer,
  LoadmoreButton,
  MainHeading,
  NFTCard,
  NFTContainer,
  NftBottom,
  NftBottomHilight,
  NftBottomText,
  NftDescription,
  NftTitle,
  StyledContainer,
} from "./styles";
import { tabs } from "@/constants";
import Image from "next/image";

export const BrowseAllNFTS = () => {
  const themeMode = useGetActiveTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <StyledContainer>
      <MainHeading>Browse All NFT Collections</MainHeading>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={2}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor={"secondary"}
          textColor="secondary"
          variant="standard"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab}
              style={{
                color: themeMode === "light" ? "#000" : "#fff",
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Divider />

      <NFTContainer>
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <NFTCard key={index}>
              <Image
                objectFit="cover"
                src={"/images/service-image-6.png"}
                width={300}
                height={302}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  width: "100%",
                }}
              />
              <NftTitle>xCubes</NftTitle>
              <NftDescription>by Svyatoslav Taushev</NftDescription>
              <NftBottom>
                <Box>
                  <NftBottomText>Floor Price</NftBottomText>
                  <NftBottomHilight>100 XR</NftBottomHilight>
                </Box>
                <Box>
                  <NftBottomText textAlign={"right"}>Items</NftBottomText>
                  <NftBottomHilight textAlign={"right"}>
                    100 000
                  </NftBottomHilight>
                </Box>
              </NftBottom>
            </NFTCard>
          );
        })}
      </NFTContainer>
      <ButtonContainer>
        {" "}
        <LoadmoreButton variant="outlined">{"Load More"}</LoadmoreButton>
      </ButtonContainer>
    </StyledContainer>
  );
};
