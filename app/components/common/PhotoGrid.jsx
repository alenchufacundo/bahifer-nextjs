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
  makeStyles,
} from "@mui/material";

const photosData = [
  {
    id: 1,
    title: "Foto 1",
    description: "Descripción de la Foto 1",
    imageUrl: "url_de_la_imagen_1.jpg",
    largeImageUrl: "url_de_la_imagen_grande_1.jpg",
  },
  // Agrega más datos de fotos si es necesario
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: 8,
  },
  largeImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const PhotoGrid = () => {
  const classes = useStyles();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {photosData.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea onClick={() => openModal(photo)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={photo.imageUrl}
                  alt={photo.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {photo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {photo.description}
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
          className={classes.modal}
        >
          <Box className={classes.modalContent}>
            <img
              src={selectedPhoto.largeImageUrl}
              alt={selectedPhoto.title}
              className={classes.largeImage}
            />
            <Typography variant="h6" component="div">
              {selectedPhoto.title}
            </Typography>
            <Typography variant="body1" component="div">
              {selectedPhoto.description}
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGrid;
