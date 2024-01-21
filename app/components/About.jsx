"use client";

import { Grid, Typography, Paper, Box, Container } from "@mui/material";
import { useState } from "react";

const logoCompleto = "/assets/logo/logoCompleto.png";
const defante = "/assets/images/marcas/defante.png";
const ezeta = "/assets/images/marcas/ezeta.png";
const iscar = "/assets/images/marcas/iscar.png";
const uranga = "/assets/images/marcas/uranga.png";

export const About = () => {
  const images = [defante, ezeta, iscar, uranga];

  // Estado para manejar el hover de las imágenes
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid container spacing={3}>
      {/* Sección de Quiénes Somos */}
      <Grid
        item
        xs={12}
        sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
      >
        <Paper
          elevation={8}
          style={{
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "#121212",
            color: "#fff",
          }}
        >
          <Typography variant="h4" gutterBottom>
            CON QUIENES Y COMO TRABAJAMOS
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "20px" }}>
            Somos representantes ofiiciales de Iscar Tools y Defante y Cia.
            Distribuimos líneas líderes como Ezeta Uranga Sin-Par Vertex entre
            otras. Brindándole asesoramiento tanto como para un mejor mecanizado
            o la elección de la maquinaria ideal a corde a sus necesidades.
          </Typography>
        </Paper>
      </Grid>
      {/* Imágenes 1, 2, 3, 4 */}
      {images.map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                opacity: hoveredIndex === index ? 0.8 : 0.5,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </Paper>
        </Grid>
      ))}

      {/* <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
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
      </Grid> */}
    </Grid>
  );
};
