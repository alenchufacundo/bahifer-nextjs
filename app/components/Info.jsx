"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const styles = {
  iconSize: {
    width: "100%",
    height: "100%",
  },
};

const titulos = [
  "Envios a todo el pais",
  "Productos de calidad y con garantia",
  "Mas de 10 años en el rubro",
];

const descripcion = [
  "Envios sin cargo",
  "Trabajamos con las mejores marcas",
  "Desde el 2005",
];

const icons = [
  <LocalShippingIcon sx={styles.iconSize} />,
  <InventoryIcon sx={styles.iconSize} />,
  <AccountCircleIcon sx={styles.iconSize} />,
];

export const Info = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Grid
      container
      bgcolor="#333"
      padding={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        gap: isMobile && "30px",
      }}
    >
      {titulos.map((titulo, index) => (
        <Grid key={index} item xs={12} md={4}>
          <Box
            display="flex"
            alignItems="center"
            sx={{ width: "50px", height: "50px", margin: "auto" }}
            justifyContent="center"
            mb={2}
          >
            {icons[index]}
          </Box>
          <Box textAlign="center">
            <Typography variant="h5">{titulo}</Typography>
            <Typography variant="body1">{descripcion[index]}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
