"use client";
import Card from "@/components/Card/Card";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box } from "@mui/material";

const Home = () => {
  const themeMode = useGetActiveTheme();

  return (
    <Box sx={{
      minHeight: "100vh",
      backgroundColor: themeMode === "light" ? "#fff" : "#171717",
    }}>
      <Card />
      {/* <Box mt={5}>
        <SignInForm />
      </Box> */}
    </Box>
  );
};

export default Home;
