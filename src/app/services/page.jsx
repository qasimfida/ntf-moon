"use client";

import { CommonBanner } from "@/components/CommonBanner";
import { StyledGrid, Wrapper } from "./styles";
import { Heading } from "@/components/Heading";
import { Container, Grid } from "@mui/material";
import { servicesData } from "./data";
import { ServiceCard } from "@/components/ServiceCard";

const Services = () => {
  return (
    <Wrapper>
      <CommonBanner
        title="Excellence in Service"
        subtitle="Unmatched Quality"
      />
      <Container>
        <Heading title="Solutions for All" className="mt_44" border />
        <Grid container justifyContent={"space-between"}>
          {servicesData.map((service, index) => (
            <StyledGrid item key={index} xs={12} sm={12} md={3.9}>
              <ServiceCard service={service} />
            </StyledGrid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Services;
