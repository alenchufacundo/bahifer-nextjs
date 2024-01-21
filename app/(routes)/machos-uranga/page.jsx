import { Box, Container, Grid, Typography } from "@mui/material";
import CollapsibleTable from "./components/CollapsibleTable";

const imgMachos = "/assets/images/products/machos/machos.png";

function Machos() {
  return (
    <Container
      maxWidth="xxl"
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>
              CONTAMOS CON TODA LA VARIEDAD DE MACHOS RECTIFICADOS URANGA
              Izquierdos y Derechos
            </Typography>
            <img
              src={imgMachos}
              alt="planilla"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <CollapsibleTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Machos;
