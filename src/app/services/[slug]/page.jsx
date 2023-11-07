"use client";
import { useEffect, useState } from "react";
import { CommonBanner } from "@/components/CommonBanner";
import {
  AnimationImage,
  BackgroundColor,
  ContactText,
  ContactUs,
  Details,
  HeadingTwo,
  HeadingWrapper,
  ImageBackground,
  ImageWrapper,
  Section,
  SimpleCardGrid,
  StyledGrid,
  StyledOfferTypo,
  VisionDescription,
  Wrapper,
} from "./styles";
import { Heading } from "@/components/Heading";
import { SimpleCard } from "@/components/SimpleCard";
import { Box, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import { servicesData } from "@/constants/serviceData";

import {
  AnimationImages,
  VideoImages,
  BackgroundImages,
} from "@/constants/ImageResources";

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
        <BackgroundColor />
        {title === "Artwork Creation" && (
          <Container>
            <Grid container gap={2} justifyContent="space-between">
              {AnimationImages.map((animation, index) => (
                <Grid item md={2.5} zIndex={99} key={index}>
                  <AnimationImage>
                    <Image src={animation} />
                  </AnimationImage>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        {title === "Marketing Concept" && (
          <ImageBackground>
            <Image src={BackgroundImages[0]} alt="Background Banner" />
          </ImageBackground>
        )}
        {title === "Project Consulting" && (
          <ImageBackground>
            <Image src={BackgroundImages[1]} alt="Background Banner" />
          </ImageBackground>
        )}
        {title === "Collection Launching" && (
          <ImageBackground>
            <Image src={BackgroundImages[2]} alt="Background Banner" />
          </ImageBackground>
        )}
        {title === "Blockchain Solutions" && (
          <ImageBackground>
            <Image src={BackgroundImages[3]} alt="Background Banner" />
          </ImageBackground>
        )}
        {title === "Video Production" && (
          <Container>
            <Grid container gap={3} justifyContent="center">
              {VideoImages.map((videoImg, index) => (
                <Grid item md={3} zIndex={99} key={index}>
                  <AnimationImage>
                    <Image src={videoImg} />
                  </AnimationImage>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
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
