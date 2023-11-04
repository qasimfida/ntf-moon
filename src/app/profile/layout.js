import Sidebar from "@/components/ProfilePage/Sidebar";
import { DeatislBox, DeatislMainBox, MainBox } from "./style";

export default function ProfileLayout({ children }) {
  return (
    <MainBox>
      <Sidebar />
      <DeatislMainBox>
        <DeatislBox>{children}</DeatislBox>
      </DeatislMainBox>
    </MainBox>
  );
}
