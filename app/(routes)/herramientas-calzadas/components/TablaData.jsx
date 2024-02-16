"use client";

import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Collapse,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { dataModelo } from "../utils/data";

const CollapsibleTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell
          colSpan={2}
          sx={{ fontFamily: '"Raleway", sans-serif', color: "#7F8C8D" }}
        >
          {row.modelo}
        </TableCell>
      </TableRow>
      <TableRow></TableRow>
    </>
  );
};

const TableData = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#272727",
        borderRadius: "20px",
        border: "1px solid #fff",
        maxWidth: "250px", // Ajusta el ancho máximo según tus necesidades
        margin: "auto", // Para centrar la tabla
      }}
    >
      <Table colSpan={3}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontFamily: '"Raleway", sans-serif', color: "#3498db" }}
            >
              Modelos
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataModelo.map((row) => (
            <CollapsibleTableRow
              key={row.modelo}
              row={row}
              sx={{ fontFamily: '"Raleway", sans-serif', color: "#fff" }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
