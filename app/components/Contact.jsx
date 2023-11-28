import { Grid, Paper, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <Grid container spacing={3}>
      {/* Información de contacto */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            Información de contacto
          </Typography>
          <Typography variant="body1">
            Dirección: Calle Principal, Ciudad, País
          </Typography>
          <Typography variant="body1">Teléfono: +123456789</Typography>
          <Typography variant="body1">Email: ejemplo@example.com</Typography>
          {/* Otras informaciones de contacto */}
        </Paper>
      </Grid>
      {/* Mapa de Google Maps */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12452.059494651714!2d-62.2888479!3d-38.7174675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb66820aa2f%3A0x9e794c09c33453e7!2sBahifer!5e0!3m2!1ses-419!2sar!4v1688507171770!5m2!1ses-419!2sar"
            className="embed-responsive-item w-100 map-contact"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>
      </Grid>
      {/* Foto del local */}
      <Grid item xs={12}>
        <img
          src="URL_DE_LA_IMAGEN_DEL_LOCAL"
          alt="Local"
          style={{ maxWidth: "100%", display: "block", margin: "auto" }}
        />
      </Grid>
    </Grid>
  );
};
