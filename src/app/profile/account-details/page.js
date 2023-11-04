import Image from "next/image";
import {
  CoverPicBox,
  CoverPicMainBox,
  GreyText,
  ProfileHeadingBox,
  ProfilePicBox,
  ProfilePicMainBox,
  ProfilePicSection,
  SettingsMainHeading,
  SubHeading,
} from "../style";

export default function AccountDetails() {
  return (
    <>
      <SettingsMainHeading>Account Details</SettingsMainHeading>
      <ProfilePicSection>
        <ProfilePicMainBox>
          <ProfilePicBox>
            <Image
              src="/images/profile-pic.png"
              alt="Profile Pic"
              width={150}
              height={150}
            />
          </ProfilePicBox>
          <ProfileHeadingBox>
            <SubHeading>Profile Picture</SubHeading>
            <GreyText>Dimensions - 512 x 512</GreyText>
          </ProfileHeadingBox>
        </ProfilePicMainBox>

        <CoverPicMainBox>
          <CoverPicBox>
            <Image
              src="/images/cover-pic.png"
              alt="Profile Pic"
              width={1000}
              height={1000}
            />
          </CoverPicBox>
          <ProfileHeadingBox>
            <SubHeading>Profile Banner</SubHeading>
            <GreyText>Dimensions - 1800 x 400</GreyText>
          </ProfileHeadingBox>
        </CoverPicMainBox>
      </ProfilePicSection>
    </>
  );
}
