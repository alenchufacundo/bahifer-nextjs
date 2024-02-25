import PhotoGridOnly from "@/app/components/common/PhotoGridOnly";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { medicion } from "./utils/medicion";

function Medicion() {
  return (
    <Container
      sx={{
        width: "95%",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "30px",
          marginLeft: "-15px",
          marginBottom: "30px",
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
            Herramientas de medición Asimeto
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ marginTop: "20px" }}>
            <PhotoGridOnly elements={medicion} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "30px",
            backgroundColor: "#272727",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                textAlign: "center",
                fontFamily: '"Raleway", sans-serif',
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              En marca Asimeto trabajamos: calibres analógicos y digitales,
              bases magnéticas, brazos magnéticos, comparadores analógicos y
              digitales, medidores de altura y profundidad, micrómetros. Para
              más información sobre modelos y variedades ingresar en el catálogo
              de Asimeto aquí debajo.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              textAlign: "center",
              "& a": {
                color: "#fff",
                textDecoration: "none",
                fontStyle: "italic",
                fontSize: "20px",
                textAlign: "center",
                fontFamily: '"Raleway", sans-serif',
                "&:hover": { color: "#3498db", textDecoration: "underline" },
              },
            }}
          >
            <Link
              href="https://www.amsarg.com.ar/product-category/asimeto/"
              passHref
              target="_blank"
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
