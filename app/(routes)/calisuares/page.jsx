import PhotoGrid from "@/app/components/common/PhotoGrid";
import { Box, Container } from "@mui/material";
import { calisuares } from "./utils/util";
import TablaData from "./components/TablaData";

function Calisuares() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <PhotoGrid elements={calisuares} />
      </Box>
      <Box marginTop={3}>
        <TablaData />
      </Box>
    </Container>
  );
}

export default Calisuares;
