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
  const isMobileCardContent = useMediaQuery("(min-width:600px)");

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
            <Card
              sx={{
                minHeight: "380px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                backgroundColor: "transparent",
              }}
            >
              <CardActionArea
                onClick={() => openModal(element)}
                sx={{
                  minHeight: "380px",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "#272727",
                }}
              >
                <CardMedia
                  component="img"
                  image={element.imageUrl}
                  alt={element.title}
                  height={250}
                  sx={{
                    maxHeight: "250px",
                    backgroundColor: "#fff",
                  }}
                />
                <CardContent
                  sx={{
                    minHeight: isMobileCardContent ? "285px" : "200px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: '"Raleway", sans-serif',
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: "30px",
                      color: "#3498db",
                    }}
                  >
                    {element.title.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"Roboto", sans-serif',
                      textAlign: "justify",
                      fontWeight: "bold",
                      color: "#7F8C8D", // Light gray text color
                    }}
                  >
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
              maxWidth: isDesktop ? "40%" : "100%",
              height: "70%",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={selectedPhoto.largeImageUrl}
              alt={selectedPhoto.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGrid;
