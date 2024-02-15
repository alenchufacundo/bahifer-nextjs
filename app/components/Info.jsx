/* eslint-disable */

"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const styles = {
  iconSize: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
};

const titulos = [
  "Envios a todo el pais",
  "Pagá con el medio de pago que quieras",
  "Mas de 20 años en el rubro",
];

const icons = [
  <LocalShippingIcon sx={styles.iconSize} />,
  <PaymentsOutlinedIcon sx={styles.iconSize} />,
  <AccountCircleIcon sx={styles.iconSize} />,
];

export const Info = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Grid
      container
      bgcolor="#FE7000"
      padding={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "25px",
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
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
