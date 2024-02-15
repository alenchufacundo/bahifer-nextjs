import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

function Medicion() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "#272727",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "30px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontFamily: '"Raleway", sans-serif',
              color: "#3498db",
            }}
          >
            Herramientas de asimeto
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle"
            sx={{
              textAlign: "center",
              fontFamily: '"Raleway", sans-serif',
              fontStyle: "italic",
              color: "#fff",
            }}
          >
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
                textAlign: "center",
                fontFamily: '"Raleway", sans-serif',
                "&:hover": { color: "#3498db", textDecoration: "underline" },
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
