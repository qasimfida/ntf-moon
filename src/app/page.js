"use client";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/LandingPage/LandingPage";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box } from "@mui/material";

const Home = () => {
  const themeMode = useGetActiveTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // backgroundColor: themeMode === "light" ? "#fff" : "#171717",
        backgroundColor: themeMode === "light" ? "#fff" : "#000",
      }}
    >
      {/* <Card /> */}
      <LandingPage />
      {/* <Box mt={5}>
        <SignInForm />
      </Box> */}
      <Box mt={5}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
