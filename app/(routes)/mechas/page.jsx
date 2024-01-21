import PhotoGrid from "@/app/components/common/PhotoGrid";
import { Box, Container, Typography } from "@mui/material";
import { mechas } from "./utils/utils";
import Link from "next/link";

function Mechas() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <PhotoGrid elements={mechas} />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          textAlign: "center",
          "& a": {
            color: "#fff",
            textDecoration: "none",
            fontStyle: "italic",
            "&:hover": { color: "red", textDecoration: "underline" },
          },
        }}
      >
        <Typography variant="h4">
          Mas informacion de nuestros productos
        </Typography>
        <Link
          href="https://www.ezeta.com/categoria-producto/herramientas-normalizadas/"
          passHref
        >
          Ir al sitio oficial
        </Link>
      </Box>
    </Container>
  );
}

export default Mechas;
