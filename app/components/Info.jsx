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
  "Envíos a todo el país",
  "Pagá con el medio de pago que quieras",
  "Más de 20 años en el rubro",
];

const icons = [
  <LocalShippingIcon sx={styles.iconSize} />,
  <PaymentsOutlinedIcon sx={styles.iconSize} />,
  <AccountCircleIcon sx={styles.iconSize} />,
];

export const Info = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <section>
      <Grid
        container
        sx={{
          background: "linear-gradient(to left, #ff6c00, #eca400)",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "25px",
          padding: "50px 0",
          gap: isMobile && "30px",
        }}
      >
        {titulos.map((titulo, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                width: "50px",
                height: "50px",
                margin: "auto",
              }}
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
    </section>
  );
};
