"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
  useMediaQuery,
} from "@mui/material";

const PhotoGrid = ({ elements }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const isMobile = useMediaQuery("(max-width:900px)");
  const isDesktop = useMediaQuery("(min-width:1400px)");

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {elements.map((element) => (
          <Grid item key={element.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea
                onClick={() => openModal(element)}
                sx={{ textAlign: "center" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={element.imageUrl}
                  alt={element.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedPhoto && (
        <Modal
          open={Boolean(selectedPhoto)}
          onClose={closeModal}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isMobile ? "80%" : "70%",
              maxWidth: isDesktop ? "40%" : '%100',
              height: "70%",
              objectFit: "contain",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={selectedPhoto.largeImageUrl}
              alt={selectedPhoto.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGrid;
