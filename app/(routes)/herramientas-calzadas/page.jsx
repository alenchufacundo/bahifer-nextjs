import { Box, Container, Grid, Typography } from "@mui/material";
import TableData from "./components/TablaData";
import TableDataMedida from "./components/TableDataMedida";

const imgPlanilla = "/assets/images/products/calzadas/planilla.png";

function Calzadas() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box mb={3}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontFamily: '"Raleway", sans-serif' }}
        >
          Contamos con la más amplia variedad de herramientas calzadas para
          torno.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src={imgPlanilla}
              alt="planilla de tabla de bahifer de herramientas calzadas"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableData />
        </Grid>
        <Grid item xs={12} md={3} marginTop={3}>
          <TableDataMedida />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Calzadas;
