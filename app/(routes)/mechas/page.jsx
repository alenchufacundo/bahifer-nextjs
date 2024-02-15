import PhotoGrid from "@/app/components/common/PhotoGrid";
import { Box, Container, Typography } from "@mui/material";
import { mechas } from "./utils/utils";
import Link from "next/link";

function Mechas() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Box>
        <PhotoGrid elements={mechas} />
      </Box>
      <Box
        sx={{
          marginTop: "35px",
          textAlign: "center",
          "& a": {
            color: "#fff",
            textDecoration: "none",
            fontStyle: "italic",
            "&:hover": { color: "#3293D3", textDecoration: "underline" },
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: '"Raleway", sans-serif', color: "#fff" }}
        >
          Más información
        </Typography>
        <Link
          href="https://www.ezeta.com/categoria-producto/herramientas-normalizadas/"
          passHref
          target="_blank"
          sx={{ fontFamily: '"Raleway", sans-serif', color: "#fff" }}
        >
          Ir al sitio oficial
        </Link>
      </Box>
    </Container>
  );
}

export default Mechas;
