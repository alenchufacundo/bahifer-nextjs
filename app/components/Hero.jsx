import { Box, Container } from "@mui/material";
import Carousel from "./common/Carousel";

export const Hero = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ maxHeight: "100vh", overflow: "hidden", padding: "30px" }}
    >
      <Box item xs={12}>
        <Carousel />
      </Box>
    </Container>
  );
};
