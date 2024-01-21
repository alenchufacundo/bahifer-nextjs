import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

function Medicion() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <h1>Herramientos de asimeto</h1>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            En marca Asimeto trabajamos: calibres analógicos y digitales, bases
            magnéticas, brazos magnéticos, comparadores analógicos y digitales,
            medidores de altura y profundidad, micrómetros. Para más información
            sobre modelos y variedades ingresar en el catálogo de Asimeto aquí
            debajo.
          </Typography>
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
            <Link
              href="https://www.amsarg.com.ar/product-category/asimeto/"
              passHref
            >
              Ir al sitio oficial
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Medicion;
