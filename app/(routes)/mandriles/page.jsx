import PhotoGridOnly from "@/app/components/common/PhotoGridOnly";
import { Container } from "@mui/material";
import { mandriles } from "./utils/utils";

function Mandriles() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <PhotoGridOnly elements={mandriles} />
    </Container>
  );
}

export default Mandriles;
