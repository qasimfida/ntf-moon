import { Box } from "@mui/material";
import { ButtonsMainBox, SettingsMainBox, SubText } from "./style";
import CheckboxWithLabel from "@/components/ProfilePage/CheckboxWithLabel";
import { notificationSettings } from "@/constants";
import { WalletButton } from "@/components/Navbar/styles";
import { PrimaryButton, SecondaryButton, SettingsMainHeading } from "../style";

export default function NotificationSettings() {
  return (
    <>
      <SettingsMainHeading>Notifications Settings</SettingsMainHeading>
      <SubText>
        Select which notifications you would like to receive for wallet
        rPyPN...revTR
      </SubText>
      <SettingsMainBox>
        {notificationSettings.map((item, ind) => {
          return (
            <CheckboxWithLabel key={ind} label={item.label} text={item.text} />
          );
        })}
      </SettingsMainBox>
      <ButtonsMainBox>
        <PrimaryButton variant="contained">Update Settings</PrimaryButton>
        <SecondaryButton>Cancel</SecondaryButton>
      </ButtonsMainBox>
    </>
  );
}
