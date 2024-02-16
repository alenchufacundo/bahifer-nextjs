"use client";

import {
  Box,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { dataMedida } from "../utils/data";

const TableDataMedida = () => {
  // Crear un conjunto de valores únicos
  const uniqueMedidas = Array.from(
    new Set(dataMedida.map((item) => item.medida))
  );


  // Estado para manejar la expansión o contracción de las filas
  const [open, setOpen] = useState(false);

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#272727",
        borderRadius: "20px",
        border: "1px solid #fff",
        maxWidth: "300px", // Ajusta el ancho máximo según tus necesidades
        margin: "auto", // Para centrar la tabla
      }}
    >
      <Table colSpan={3}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontFamily: '"Raleway", sans-serif', color: "#3498db" }}
            >
              Medidas
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqueMedidas.map((medida, index) => (
            <TableRow key={index} onClick={() => setOpen(!open)}>
              <TableCell
                colSpan={2}
                sx={{ fontFamily: '"Raleway", sans-serif', color: "#7F8C8D" }}
              >
                {medida}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDataMedida;
