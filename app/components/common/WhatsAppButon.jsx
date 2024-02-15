"use client";

import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2914738292"; // Reemplaza con el número de teléfono deseado
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <Tooltip title="Abrir WhatsApp" arrow>
      <Fab
        color="primary"
        style={{
          backgroundColor: "#4CCB5A",
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
        onClick={handleWhatsAppClick}
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
