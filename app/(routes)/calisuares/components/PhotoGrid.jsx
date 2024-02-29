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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGridOnly = ({ elements }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");
  const isDesktop = useMediaQuery("(min-width:1400px)");
  const isMobileCardContent = useMediaQuery("(min-width:600px)");

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setActiveIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setActiveIndex(0);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  console.log(elements[0].images);
  return (
    <div>
      <Grid container spacing={2}>
        {elements.map((element, index) => (
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
                onClick={() => openModal(element, index)}
                sx={{
                  minHeight: "250px",
                  height: "10%",
                  textAlign: "center",
                  backgroundColor: "#272727",
                }}
              >
                <CardMedia
                  component="img"
                  image={element.images[0]}
                  alt={element.title}
                  height={250}
                  sx={{
                    maxHeight: "250px",
                    backgroundColor: "#fff",
                  }}
                />
                <CardContent
                  sx={{
                    minHeight: isMobileCardContent ? "150px" : "200px",
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
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Slider {...settings} initialSlide={activeIndex}>
              {elements.map((element, index) =>
                console.log(index)(
                  <Box sx={{ heigth: "250px", width: "200px" }}>
                    <img
                      key={index}
                      src={element.images}
                      alt={element.title}
                      style={{
                        maxWidth: "100%",
                        objectFit: "fill",
                        borderRadius: "15px",
                      }}
                    />
                  </Box>
                )
              )}
            </Slider>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGridOnly;
