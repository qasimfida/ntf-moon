"use client"
import { serahcItems } from "@/constants";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import { CollectionBox, CollectionCountBox, CollectionCountTypography, CollectionMainBox, CollectionNameTypography, Input, LengthTextBox, ResultsMainBox, SearchIcon, SearchMainBox, SearchTypeTypography, SearchWrapper, SeeAllMainBox, SeeAllTypography, TotalLengthBox } from "./styles";

export const SearchBar = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const ref = useRef();

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const filteredItems = serahcItems.filter((item) => {});

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    if (value) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [value]);

  return (
    <SearchWrapper ref={ref}>
      <SearchMainBox>
        <SearchIcon />
        <Input
          className="searchInput"
          placeholder="Search..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {value && open && (
          <TotalLengthBox
            onClick={() => setValue("")}
          >
            Clear
            <LengthTextBox
            >
              5
            </LengthTextBox>
          </TotalLengthBox>
        )}
      </SearchMainBox>
      {value && open && (
        <ResultsMainBox
        >
          {serahcItems.map((item) => {
            return (
              <>
                {item.type == "collections" && (
                  <Box>
                    {" "}
                    <SearchTypeTypography>Collections</SearchTypeTypography>
                    {item.collections
                      ?.filter((i) =>
                        i.name.toLowerCase().includes(value.toLowerCase())
                      )
                      .map((collection, ind) => {
                        return (
                          <CollectionMainBox
                            sx={{
                              borderBottom:
                                ind !== item.collections.length - 1 &&
                                "1px solid rgba(207, 219, 213, 0.15)",
                            }}
                            key={ind}
                          >
                            <CollectionBox>
                              <Image
                                src={"/images/collectionImg.svg"}
                                width={30}
                                height={30}
                              />
                              <CollectionNameTypography>
                                {collection.name}
                              </CollectionNameTypography>
                            </CollectionBox>
                            <CollectionCountBox>
                              <Image
                                src={"/images/doubleArrow.svg"}
                                width={18}
                                height={18}
                                style={{ color: "white" }}
                              />
                              <CollectionCountTypography>
                                {collection.items} items
                              </CollectionCountTypography>
                            </CollectionCountBox>
                          </CollectionMainBox>
                        );
                      })}
                  </Box>
                )}
                {item.type == "profiles" && (
                  <Box>
                    {" "}
                    <SearchTypeTypography>Profiles</SearchTypeTypography>
                    {item.profiles
                      .filter((i) =>
                        i.name.toLowerCase().includes(value.toLowerCase())
                      )
                      .map((profile, ind) => {
                        return (
                          <>
                            <CollectionMainBox
                              sx={{
                                borderBottom:
                                  ind !== item.profiles.length - 1 &&
                                  "1px solid rgba(207, 219, 213, 0.15)",
                              }}
                              key={ind}
                            >
                              <CollectionBox>
                                <Image
                                  src={"/images/collectionImg.svg"}
                                  width={30}
                                  height={30}
                                  style={{}}
                                />
                                <CollectionNameTypography>
                                  {profile.name}
                                </CollectionNameTypography>
                              </CollectionBox>
                            </CollectionMainBox>
                          </>
                        );
                      })}
                  </Box>
                )}
              </>
            );
          })}
          <Box>
            <SeeAllMainBox>
              <SeeAllTypography
              >
                See all results
              </SeeAllTypography>
            </SeeAllMainBox>
          </Box>
        </ResultsMainBox>
      )}
    </SearchWrapper>
  );
}

