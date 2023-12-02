import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const styles = {
  icon: {
    width: "100%",
    height: "100%",
  },
  boxIcon: {
    width: "50px",
    height: "50px",
    color: "#fff",  
  },
};

const Footer = () => {
  return (
    <Box color="#fff" p={3} spacing={3}>
      <Grid container justifyContent="center" alignItems="center" textAlign="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Dirección: Calle Principal, Ciudad, País
          </Typography>
          <Typography variant="body1">
            Teléfono: 291 473 8292 - 291 453 7358/7154
          </Typography>
          <Typography variant="body1">Email: bahi_fer@yahoo.com.ar</Typography>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center">
          <IconButton
            component={Link}
            href="https://wa.me/1234567890"
            sx={styles.boxIcon}
          >
            <WhatsAppIcon sx={styles.icon} />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.facebook.com"
            sx={styles.boxIcon}
          >
            <FacebookIcon sx={styles.icon} />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com"
            sx={styles.boxIcon}
          >
            <InstagramIcon sx={styles.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
