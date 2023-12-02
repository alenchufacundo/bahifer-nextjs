import { Container, Grid, Paper, Typography } from "@mui/material";

const localImage = "/assets/images/local/local.jpg";

export const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Foto del local */}
        <Grid item xs={12}>
          <img
            src={localImage}
            alt="Local"
            style={{ maxWidth: "100%", display: "block", marginTop: "30px" }}
          />
        </Grid>

        {/* Contenedor con márgenes para la tarjeta de contacto y el mapa */}
        <Grid item xs={12}>
          <Container maxWidth="xl" sx={{ padding: "10px 0" }}>
            <Grid
              container
              spacing={3}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {/* Tarjeta de contacto */}
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={3}
                  style={{
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    INFORMACIÓN DE CONTACTO
                  </Typography>
                  <Typography variant="body1">
                    LUNES A VIERNES DE 8 A 17HS
                  </Typography>
                  <Typography variant="body1">
                    291 473 8292 - 291 453 7358/7154
                  </Typography>
                  <Typography variant="body1">bahi_fer@yahoo.com.ar</Typography>
                </Paper>
              </Grid>

              {/* Mapa de Google Maps */}
              <Grid item xs={12} md={8}>
                <Paper elevation={3} sx={{ height: "300px" }}>
                  <iframe
                    title="Google Maps"
                    style={{ width: "100%", height: "100%" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12452.059494651714!2d-62.2888479!3d-38.7174675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb66820aa2f%3A0x9e794c09c33453e7!2sBahifer!5e0!3m2!1ses-419!2sar!4v1688507171770!5m2!1ses-419!2sar"
                    className="embed-responsive-item w-100 map-contact"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
