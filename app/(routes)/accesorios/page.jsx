"use client";

import PhotoGrid from "@/app/components/common/PhotoGrid";
import { accesorios } from "./utils/utils";
import { Box, Container } from "@mui/material";
import TableData from "./components/TableData";

function Accesorios() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px", marginBottom: "35px" }}>
      <PhotoGrid elements={accesorios} />
      <Box marginTop={3}>
        <TableData />
      </Box>
    </Container>
  );
}

export default Accesorios;
