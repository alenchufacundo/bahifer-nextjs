import { Box, Container } from "@mui/material";
import TablaData from "./components/TablaData";
import { calisuares } from "./utils/util";
import PhotoGridOnly from "./components/PhotoGrid";

function Calisuares() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
        marginBottom: "35px",
      }}
    >
      <Box>
        {/* <PhotoGridOnly elements={calisuares} /> */}
      </Box>
      <Box marginTop={3}>
        <TablaData />
      </Box>
    </Container>
  );
}

export default Calisuares;
