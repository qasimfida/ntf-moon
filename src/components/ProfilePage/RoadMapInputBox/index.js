import { GreyText } from "@/app/profile/style";
import { MainBox, StyledInput, StyledTextArea } from "./style";

export default function RoadMapInputBox({
  label,
  textAreaPlaceholder,
  inputPlaceholder,
}) {
  return (
    <>
      <MainBox>
        <GreyText>{label}</GreyText>
        {/* <TextBold>{text}</TextBold> */}
        <StyledInput placeholder={inputPlaceholder} />
        <StyledTextArea placeholder={textAreaPlaceholder} />
      </MainBox>
    </>
  );
}
