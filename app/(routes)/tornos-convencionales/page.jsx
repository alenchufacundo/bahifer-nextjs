import { Box, Container, Typography } from "@mui/material";
import { tornos } from "./utils/utils";
import PhotoGrid from "@/app/components/common/PhotoGrid";
import Link from "next/link";

function Tornos() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
      }}
    >
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: '"Raleway", sans-serif',
            color: "#3498db",
          }}
        >
          Maquinarias
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            fontStyle: "italic",
            fontFamily: '"Raleway", sans-serif',
            color: "#fff",
          }}
        >
          Trabajamos con la más amplia variedad de maquinarías para su tornería
          como tornos convencionales y CNC, fresadoras convencionales y CNC,
          perforadoras de pie y radiales y centros de mecanizados
        </Typography>
      </Box>
      <Box>
        <PhotoGrid elements={tornos} />
      </Box>
      <Box
        sx={{
          marginTop: "35px",
          marginBottom: "35px",
          textAlign: "center",
          fontSize: "24px",
          "& a": {
            color: "#fff",
            textDecoration: "none",
            fontStyle: "italic",
            "&:hover": { color: "#3293D3", textDecoration: "underline" },
          },
        }}
      >
        <Link
          href="https://www.ezeta.com/categoria-producto/herramientas-normalizadas/"
          passHref
          target="_blank"
          sx={{
            fontFamily: '"Raleway", sans-serif',
            color: "#fff",
            fontSize: "24px",
          }}
        >
          Ir al sitio oficial
        </Link>
      </Box>
    </Container>
  );
}

export default Tornos;
