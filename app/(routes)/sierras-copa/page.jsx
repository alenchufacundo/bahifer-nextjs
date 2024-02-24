import PhotoGridOnly from "@/app/components/common/PhotoGridOnly";
import { Container } from "@mui/material";

const sierrasCopas = [
  {
    id: 1,
    title: "SIERRA COPA BIMETALICA",
    imageUrl: "/assets/images/products/sierrascopa/sierra-copa-bimetalica.jpg",
    largeImageUrl:
      "/assets/images/products/sierrascopa/sierra-copa-bimetalica.jpg",
  },
];

function SierraCopa() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <PhotoGridOnly elements={sierrasCopas} />
    </Container>
  );
}

export default SierraCopa;
