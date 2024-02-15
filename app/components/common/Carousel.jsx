"use client";

import { Box, IconButton, MobileStepper, useMediaQuery } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

const tutorialSteps = [
  {
    label: "Item 1",
    imgPath: "/assets/images/hero/comercial.png",
  },
  {
    label: "Item 2",
    imgPath: "/assets/images/hero/wp.png",
  },
  {
    label: "Item 3",
    imgPath: "/assets/images/hero/envios.png",
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
    <Box sx={{ position: "relative", height: "100%" }}>
      <img
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
        style={{
          display: "block",
          overflow: "hidden",
          height: "100%",
          width: "100%",
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
          backgroundColor: "transparent",
        }}
        nextButton={
          <IconButton size="small" onClick={handleNext} sx={{ color: "#FFF" }}>
            <ArrowForwardIcon />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack} sx={{ color: "#FFF" }}>
            <ArrowBackIcon />
          </IconButton>
        }
      />
    </Box>
  );
}

export default Carousel;
