import { GreyText } from "@/app/profile/style";
import { CheckMainBox, MainBox, SettingLabel, StyledCheckbox } from "./style";

export default function CheckboxWithLabel({ label, text, border = true }) {
  return (
    <>
      <MainBox
        sx={{
          borderBottom: !border && "none !important",
        }}
      >
        {label && <SettingLabel>{label}</SettingLabel>}
        <CheckMainBox>
          <StyledCheckbox defaultChecked />
          <GreyText>{text}</GreyText>
        </CheckMainBox>
      </MainBox>
    </>
  );
}
