"use client";

import { Grid, Typography, Paper, Box, useMediaQuery } from "@mui/material";
import Link from "next/link";

const logoCompleto = "/assets/logo/logoCompleto.png";
const defante = "/assets/images/marcas/defante.png";
const ezeta = "/assets/images/marcas/ezeta.png";
const iscar = "/assets/images/marcas/iscar.png";
const uranga = "/assets/images/marcas/uranga.png";

export const About = () => {
  const images = [defante, ezeta, iscar, uranga];

  return (
    <Grid container spacing={3}>
      {/* Imágenes 1, 2 y 3 */}
      {images.map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 20, textAlign: "center" }}>
            <Link >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  opacity: 0.5,
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            </Link>
          </Paper>
        </Grid>
      ))}
      {/* Sección de Quiénes Somos */}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Paper
          elevation={8}
          style={{
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "350px",
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

      <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
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
