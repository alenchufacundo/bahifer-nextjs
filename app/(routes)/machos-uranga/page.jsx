import { Box, Container, Grid, Typography } from "@mui/material";
import CollapsibleTable from "./components/CollapsibleTable";

const imgMachos = "/assets/images/products/machos/machos.png";

function Machos() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        marginTop: "30px",
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontFamily: '"Raleway", sans-serif' }}>
              CONTAMOS CON LA MÁS AMPLIA VARIEDAD DE MACHOS RECTIFICADOS URANGA,
              IZQUIERDOS Y DERECHOS TANTO DE ACERO RAPIDO COMO ACERO AL CARBONO
            </Typography>
            <img
              src={imgMachos}
              alt="planilla"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            marginTop={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CollapsibleTable />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Machos;
