import { GreyText, TextBold } from "@/app/profile/style";
import { MainBox } from "./style";

export default function FieldBoxWithLabel({ label, text }) {
  return (
    <>
      <MainBox>
        <GreyText>{label}</GreyText>
        <TextBold>{text}</TextBold>
      </MainBox>
    </>
  );
}
