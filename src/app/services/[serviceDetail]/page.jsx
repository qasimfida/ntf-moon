"use client";

import { CommonBanner } from "@/components/CommonBanner";
import {
  AnimationImage,
  BackgroundBanner,
  ContactText,
  ContactUs,
  Details,
  HeadingTwo,
  HeadingWrapper,
  Section,
  StyledOfferTypo,
  VisionDescription,
  Wrapper,
} from "./styles";
import { Heading } from "@/components/Heading";
import { SimpleCard } from "@/components/SimpleCard";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ServiceImg2 from "../../../../public/images/service-image-2.png";
import { StyledGrid } from "./styles";
import Animation1 from "../../../../public/images/animation-1.png";
import Animation2 from "../../../../public/images/animation-2.png";
import Animation3 from "../../../../public/images/animation-3.png";
import Animation4 from "../../../../public/images/animation-4.png";

const ServiceDetail = ({ params }) => {
  const { serviceDetail } = params;
  console.log(params, "paraaam");

  return (
    <Wrapper>
      <CommonBanner
        title="Excellence in Service"
        subtitle="Unmatched Quality"
      />
      <Container>
        <Heading title={serviceDetail} className="mt_44" border />
        <Details>
          <Grid container justifyContent={"space-between"}>
            <Grid item md={5}>
              <SimpleCard
                title={
                  "Elevate Your NFT Project with Exceptional Digital Artwork"
                }
                description={
                  "In the burgeoning realm of Non-Fungible Tokens (NFTs), the essence of uniqueness and artistic prowess is paramount. At Moon Studios, we epitomize the fusion of artistry and blockchain technology by offering sterling digital artwork tailored for your NFT projects."
                }
              />
            </Grid>
            <StyledGrid item md={5}>
              <Image src={ServiceImg2} alt="Art-Banner" />
            </StyledGrid>
          </Grid>
          <HeadingWrapper>
            <Heading
              title=" Why is Having a Skilled Artist and a Reliable Partner Crucial?"
              className="mt_44"
              textAlign="center"
            />
          </HeadingWrapper>
          <Grid container gap={3} justifyContent={"space-between"}>
            <Grid item md={5.8} mt={3}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Uniqueness"}
                description={
                  "A skilled artist not only crafts unique digital assets but also instills an indelible identity in your NFT project. Stand apart in a crowded marketplace with artwork that resonates."
                }
              />
            </Grid>
            <Grid item md={5.8} mt={3}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Quality"}
                description={
                  "High-caliber artwork is a hallmark of a reputable NFT project. Our seasoned artists ensure every pixel tells a story, enhancing the overall value and appeal of your tokens."
                }
              />
            </Grid>
          </Grid>
          <Grid container gap={3} justifyContent={"space-between"}>
            <Grid item md={5.8} mt={3}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Professionalism"}
                description={
                  "Partner with a team that understands the intricacies of the NFT landscape. We adhere to deadlines, maintain open communication, and are committed to propelling your project to new heights."
                }
              />
            </Grid>
            <Grid item md={5.8} mt={3}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Long-Term Relationship"}
                description={
                  "A reliable partner is invaluable in navigating the evolving NFT space. Grow together with a team that values collaboration and is invested in your success."
                }
              />
            </Grid>
          </Grid>
        </Details>
      </Container>
      <Section>
        <BackgroundBanner />
        <Container>
          <Grid container gap={2} justifyContent={"space-between"}>
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
          <Grid container justifyContent={"space-between"} gap={2}>
            <Grid item md={3.8}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Long-Term Relationship"}
                description={
                  "A reliable partner is invaluable in navigating the evolving NFT space. Grow together with a team that values collaboration and is invested in your success."
                }
              />
            </Grid>
            <Grid item md={3.8}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Long-Term Relationship"}
                description={
                  "A reliable partner is invaluable in navigating the evolving NFT space. Grow together with a team that values collaboration and is invested in your success."
                }
              />
            </Grid>
            <Grid item md={3.8}>
              <SimpleCard
                textAlign="center"
                shadow
                title={"Long-Term Relationship"}
                description={
                  "A reliable partner is invaluable in navigating the evolving NFT space. Grow together with a team that values collaboration and is invested in your success."
                }
              />
            </Grid>
          </Grid>
          <VisionDescription variant="body2">
            Embark on a collaborative journey with Moon Studios as your trusted
            ally in the NFT domain. Our adept artists and seasoned professionals
            are poised to transform your vision into a captivating digital
            reality.
          </VisionDescription>
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
