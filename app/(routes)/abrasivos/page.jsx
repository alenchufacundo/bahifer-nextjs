import PhotoGrid from "@/app/components/common/PhotoGrid";

import { abrasivos } from "./utils/utils";
import { Container } from "@mui/material";

function Abrasivos() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
      <PhotoGrid elements={abrasivos} />
    </Container>
  );
}

export default Abrasivos;
