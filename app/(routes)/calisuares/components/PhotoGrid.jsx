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
  IconButton,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PhotoGrid = ({ elements }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");
  const isDesktop = useMediaQuery("(min-width:1400px)");
  const isMobileCardContent = useMediaQuery("(min-width:600px)");

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? elements.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === elements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* ... tu código anterior ... */}
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
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              sx={{ position: "absolute", left: 0, top: "50%" }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <img
              src={
                currentImageIndex === 0
                  ? elements[currentImageIndex].largeImageUrl
                  : elements[currentImageIndex].largeImageUrl2
              }
              alt={elements[currentImageIndex].title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <IconButton
              onClick={handleNextImage}
              sx={{ position: "absolute", right: 0, top: "50%" }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGrid;
