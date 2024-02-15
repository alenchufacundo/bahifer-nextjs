"use client";

import { Box, Container, useMediaQuery } from "@mui/material";
import Carousel from "./common/Carousel";

export const Hero = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container
      maxWidth={!isMobile && "xxl"}
      sx={{
        maxHeight: "100vh",
        overflow: "hidden",
        padding: "30px 0 0 0",
        width: "100%",
      }}
      id="inicio"
    >
      <Box item xs={12} sx={{ height: isMobile ? "30vh" : "60vh" }}>
        <Carousel />
      </Box>
    </Container>
  );
};
