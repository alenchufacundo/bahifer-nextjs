import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const styles = {
  icon: {
    width: "100%",
    height: "100%",
    "&:hover": {
      color: "#2a8cb9",
    },
  },
  boxIcon: {
    width: "50px",
    height: "50px",
    color: "#fff",
  },
};

const Footer = () => {
  return (
    <section>
      <Box color="#fff" p={3} spacing={3} sx={{ backgroundColor: "#272727" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Charlone 845, Bahía Blanca, Argentina
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", textDecoration: "none", color: "#fff" }}
            >
              Teléfono: 291 473 8292 - 291 453 7358/7154
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Email: bahi_fer@yahoo.com.ar
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <IconButton
              component={Link}
              href="https://wa.me/2914738292"
              target="_blank"
              sx={styles.boxIcon}
            >
              <WhatsAppIcon sx={styles.icon} />
            </IconButton>
            <IconButton
              component={Link}
              target="_blank"
              href="https://www.facebook.com/Bahifer/?locale=es_LA"
              sx={styles.boxIcon}
            >
              <FacebookIcon sx={styles.icon} />
            </IconButton>
            <IconButton
              component={Link}
              target="_blank"
              href="https://www.instagram.com/bahifer/?hl=es-la"
              sx={styles.boxIcon}
            >
              <InstagramIcon sx={styles.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Footer;
