import { Box, Container, Typography } from "@mui/material";
import { insertos } from "./utils/utils";
import PhotoGrid from "@/app/components/common/PhotoGrid";
import Link from "next/link";

function Insertos() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <PhotoGrid elements={insertos} />
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Typography sx={{ fontStyle: "italic" }}>
          CONTAMOS CON LA MAS COMPLETA VARIEDAD DE INSERTOS LINEA ISCAR,
          INSERTOS PARA DESVASTE, CORTE, TRONZADO Y MÁS. PARA MÁS INFORMACION
          SOBRE MODELOS Y VARIEDADES INGRESAR EN EL CATALOGO DE ISCAR AQUI
          DEBAJO
        </Typography>
        <Box
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            textAlign: "center",
            "& a": {
              color: "#fff",
              textDecoration: "none",
              fontStyle: "italic",
              "&:hover": { color: "red", textDecoration: "underline" },
            },
          }}
        >
          <Link href="catalogo" passHref>
            Ir al catalogo
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Insertos;
