import { GreyText } from "@/app/profile/style";
import { CheckMainBox, MainBox, SettingLabel, StyledCheckbox } from "./style";

export default function CheckboxWithLabel({ label, text }) {
  return (
    <>
      <MainBox>
        <SettingLabel>{label}</SettingLabel>
        <CheckMainBox>
          <StyledCheckbox defaultChecked />
          <GreyText>{text}</GreyText>
        </CheckMainBox>
      </MainBox>
    </>
  );
}
