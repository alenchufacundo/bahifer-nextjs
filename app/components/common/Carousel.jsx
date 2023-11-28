"use client";

import {
  Box,
  IconButton,
  MobileStepper,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

const tutorialSteps = [
  {
    label: "Item 1",
    imgPath: "https://via.placeholder.com/600x300?text=Item+1",
  },
  {
    label: "Item 2",
    imgPath: "https://via.placeholder.com/600x300?text=Item+2",
  },
  {
    label: "Item 3",
    imgPath: "https://via.placeholder.com/600x300?text=Item+3",
  },
];

function Carousel() {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep + 1) % tutorialSteps.length
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? tutorialSteps.length - 1 : prevActiveStep - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(
        (prevActiveStep) => (prevActiveStep + 1) % tutorialSteps.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeStep]);

  return (
    <Box sx={{ position: "relative" }}>
      <img
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
        style={{
          display: "block",
          maxWidth: "100%",
          overflow: "hidden",
          width: "100%",
          height: isMobile && "40vh",
        }}
      />
      <MobileStepper
        steps={tutorialSteps.length}
        position="static"
        activeStep={activeStep}
        sx={{
          bottom: 0,
          position: "absolute",
          width: "100%",
        }}
        nextButton={
          <IconButton size="small" onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
        }
      />
    </Box>
  );
}

export default Carousel;
