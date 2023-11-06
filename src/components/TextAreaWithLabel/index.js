import { GreyText, TextBold } from "@/app/profile/style";
import { MainBox, StyledTextArea } from "./style";

export default function TextAreaWithLabel({ label, text }) {
  return (
    <>
      <MainBox>
        <GreyText>{label}</GreyText>
        {/* <TextBold>{text}</TextBold> */}
        <StyledTextArea />
      </MainBox>
    </>
  );
}
