import { Box, Container, Typography } from "@mui/material";
import { insertos } from "./utils/utils";
import Link from "next/link";
import PhotoGridOnly from "@/app/components/common/PhotoGridOnly";

function Insertos() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Box>
        <PhotoGridOnly elements={insertos} />
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Typography
          sx={{ fontStyle: "italic", fontFamily: '"Raleway", sans-serif' }}
        >
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
            fontFamily: '"Raleway", sans-serif',
            "& a": {
              color: "#fff",
              textDecoration: "none",
              fontSize: "20px",
              fontFamily: '"Raleway", sans-serif',
              fontStyle: "italic",
              "&:hover": { color: "#3498db", textDecoration: "underline" },
            },
          }}
        >
          <Link
            href="https://www.iscar.com/products.aspx/countryid/27/productid/5435"
            passHref
            target="_blank"
          >
            Ir al sitio oficial
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Insertos;
