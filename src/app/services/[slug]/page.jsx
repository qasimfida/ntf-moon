"use client";

import { useEffect, useState } from "react";
import { CommonBanner } from "@/components/CommonBanner";
import {
  AnimationImage,
  BackgroundBanner,
  ContactText,
  ContactUs,
  Details,
  HeadingTwo,
  HeadingWrapper,
  ImageWrapper,
  Section,
  SimpleCardGrid,
  StyledOfferTypo,
  VisionDescription,
  Wrapper,
} from "./styles";
import { Heading } from "@/components/Heading";
import { SimpleCard } from "@/components/SimpleCard";
import { Box, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import { StyledGrid } from "./styles";
import Animation1 from "../../../../public/images/animation-1.png";
import Animation2 from "../../../../public/images/animation-2.png";
import Animation3 from "../../../../public/images/animation-3.png";
import Animation4 from "../../../../public/images/animation-4.png";
import { servicesData } from "@/constants/serviceData";

const ServiceDetail = ({ params }) => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const { slug } = params;
    const service = servicesData.find((service) => service.id === slug);

    if (service) {
      setSelectedService(service);
    }
  }, [params]);

  if (!selectedService) {
    return <Box>Service not found</Box>;
  }

  const {
    title,
    image,
    purposeCard,
    simpleCardData,
    subTitle,
    simpleCardDataTwo,
    vision,
  } = selectedService;

  return (
    <Wrapper>
      <CommonBanner
        title="Excellence in Service"
        subtitle="Unmatched Quality"
      />
      <Container>
        <Heading title={title} className="mt_44" border />
        <Details>
          <Grid container justifyContent="space-between">
            <Grid item md={5}>
              <SimpleCard
                title={purposeCard.title}
                description={purposeCard.description}
              />
            </Grid>
            <StyledGrid item md={5}>
              <ImageWrapper>
                <Image src={image} alt="Banner" />
              </ImageWrapper>
            </StyledGrid>
          </Grid>
          <HeadingWrapper>
            <Heading title={subTitle} className="mt_44" textAlign="center" />
          </HeadingWrapper>
          <Grid container gap={3} justifyContent="space-between">
            {simpleCardData.map((card, index) => (
              <Grid item md={5.8} key={index}>
                <SimpleCard
                  textAlign="center"
                  shadow
                  title={card.title}
                  description={card.description}
                />
              </Grid>
            ))}
          </Grid>
        </Details>
      </Container>
      <Section>
        <BackgroundBanner />
        <Container>
          <Grid container gap={2} justifyContent="space-between">
            <Grid item md={2.5} zIndex={99}>
              <AnimationImage>
                <Image src={Animation1} />
              </AnimationImage>
            </Grid>
            <Grid item md={2.5} zIndex={99}>
              <AnimationImage>
                <Image src={Animation2} />
              </AnimationImage>
            </Grid>
            <Grid item md={2.5} zIndex={99}>
              <AnimationImage>
                <Image src={Animation3} />
              </AnimationImage>
            </Grid>
            <Grid item md={2.5} zIndex={99}>
              <AnimationImage>
                <Image src={Animation4} />
              </AnimationImage>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Details className="pb-100">
        <Container>
          <HeadingTwo>
            <StyledOfferTypo variant="h3">Our Offerings</StyledOfferTypo>
          </HeadingTwo>
          <Grid container justifyContent="space-between" gap={2}>
            {simpleCardDataTwo.map((card, index) => (
              <SimpleCardGrid item md={3.8} key={index}>
                <SimpleCard
                  textAlign="center"
                  shadow
                  title={card.title}
                  description={card.description}
                />
              </SimpleCardGrid>
            ))}
          </Grid>
          <VisionDescription variant="body2">{vision}</VisionDescription>
          <ContactUs>
            <ContactText>Get in touch today!</ContactText>
            <Button variant="contained">Contact Us</Button>
          </ContactUs>
        </Container>
      </Details>
    </Wrapper>
  );
};

export default ServiceDetail;
