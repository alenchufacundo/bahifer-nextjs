import { Box, Container, Grid, Typography } from "@mui/material";
import TableData from "./components/TablaData";

const imgPlanilla = "/assets/images/products/calzadas/planilla.png";

function Calzadas() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={imgPlanilla}
              alt="planilla"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <TableData />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Calzadas;
