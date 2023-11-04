"use client";
import { profileSettingsNavOptions } from "@/constants";
import { usePathname } from "next/navigation";
import { MainBox, NavigationButton, SidebarHeading } from "./style";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <MainBox>
      <SidebarHeading variant="h5">Profile Settings</SidebarHeading>

      {profileSettingsNavOptions.map((option, key) => {
        return (
          <NavigationButton
            href={option.path}
            startIcon={option.icon}
            key={key}
            sx={{
              color: pathname === option.path && "inherit.main",
              backgroundColor: pathname === option.path && "grey.1000",
              "&& > span > svg": {
                color: pathname === option.path && "inherit.main",
              },
            }}
          >
            {option.label}
          </NavigationButton>
        );
      })}
    </MainBox>
  );
}
