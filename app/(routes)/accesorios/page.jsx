"use client";

import { accesorios } from "./utils/utils";
import { Box, Container } from "@mui/material";
import TableData from "./components/TableData";
import PhotoGridOnly from "@/app/components/common/PhotoGridOnly";


function Accesorios() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px", marginBottom: "35px" }}>
      <PhotoGridOnly elements={accesorios} />
      <Box marginTop={3}>
        <TableData />
      </Box>
    </Container>
  );
}

export default Accesorios;
