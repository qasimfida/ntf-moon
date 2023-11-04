import Image from "next/image";
import {
  CoverPicBox,
  CoverPicMainBox,
  GreyText,
  PrimaryButton,
  ProfileHeadingBox,
  ProfilePicBox,
  ProfilePicMainBox,
  ProfilePicSection,
  SecondaryButton,
  SettingsMainHeading,
  SubHeading,
} from "../style";
import {
  ButtonsMainBox,
  SettingsMainBox,
} from "../notification-settings/style";
import FieldBoxWithLabel from "@/components/ProfilePage/FieldBoxWithLabel";
import TextAreaWithLabel from "@/components/TextAreaWithLabel";
import CheckboxWithLabel from "@/components/ProfilePage/CheckboxWithLabel";
import RoadMapInputBox from "@/components/ProfilePage/RoadMapInputBox";

export default function ProfileSettings() {
  return (
    <>
      <SettingsMainHeading>Profile Settings</SettingsMainHeading>
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

      <SubHeading>Account Information</SubHeading>

      <SettingsMainBox>
        <FieldBoxWithLabel label={"Display Name"} text={"TheRealIslander"} />
        <FieldBoxWithLabel
          label={"Discord Username"}
          text={"TheRealIslander#1232"}
        />
        <FieldBoxWithLabel
          label={"Twitter / X Username"}
          text={"@TheRealIslander"}
        />
        <TextAreaWithLabel label={"Bio Description"} />
      </SettingsMainBox>

      <SubHeading>Road Map</SubHeading>

      <SettingsMainBox>
        <RoadMapInputBox
          textAreaPlaceholder={"Text block (max. 50 Words)"}
          inputPlaceholder={"Header (max. 2 Words)"}
          label={"Bulletpoint 01"}
        />
        <RoadMapInputBox
          textAreaPlaceholder={"Text block (max. 50 Words)"}
          inputPlaceholder={"Header (max. 2 Words)"}
          label={"Bulletpoint 02"}
        />
        <RoadMapInputBox
          textAreaPlaceholder={"Text block (max. 50 Words)"}
          inputPlaceholder={"Header (max. 2 Words)"}
          label={"Bulletpoint 03"}
        />
        <RoadMapInputBox
          textAreaPlaceholder={"Text block (max. 50 Words)"}
          inputPlaceholder={"Header (max. 2 Words)"}
          label={"Bulletpoint 04"}
        />
        <RoadMapInputBox
          textAreaPlaceholder={"Text block (max. 50 Words)"}
          inputPlaceholder={"Header (max. 2 Words)"}
          label={"Bulletpoint 05"}
        />
      </SettingsMainBox>

      <ButtonsMainBox>
        <PrimaryButton variant="contained">Update Settings</PrimaryButton>
        <SecondaryButton>Cancel</SecondaryButton>
      </ButtonsMainBox>
    </>
  );
}
