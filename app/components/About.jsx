"use client";

import { Grid, Typography, Paper, Box, useMediaQuery } from "@mui/material";

const logoCompleto = "/assets/logo/logoCompleto.png";

export const About = () => {
  return (
    <Grid container spacing={3}>
      {/* Imágenes 1, 2 y 3 */}
      {[1, 2, 3, 4].map((item) => (
        <Grid item key={item} xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
            <img
              src={`https://via.placeholder.com/300x200?text=Image+${item}`}
              alt={`Image ${item}`}
              style={{ width: "100%" }}
            />
          </Paper>
        </Grid>
      ))}
      {/* Sección de Quiénes Somos */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          elevation={3}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "247px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            CON QUIENES Y COMO TRABAJAMOS
          </Typography>
          <Typography variant="body1">
            Somos representantes ofiiciales de Iscar Tools y Defante y Cia.
            Distribuimos líneas líderes como Ezeta Uranga Sin-Par Vertex entre
            otras. Brindándole asesoramiento tanto como para un mejor mecanizado
            o la elección de la maquinaria ideal a corde a sus necesidades.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={3}
          style={{
            width: "100%",
            height: "67%",
            backgroundColor: "transparent",
          }}
          bgcolor="#f5f5f5"
        >
          <img src={logoCompleto} alt="" style={{ maxWidth: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};
