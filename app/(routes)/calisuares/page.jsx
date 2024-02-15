import { Box, Container } from "@mui/material";
import TablaData from "./components/TablaData";

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
        {/* <PhotoGrid elements={calisuares} /> */}
      </Box>
      <Box marginTop={3}>
        <TablaData />
      </Box>
    </Container>
  );
}

export default Calisuares;
