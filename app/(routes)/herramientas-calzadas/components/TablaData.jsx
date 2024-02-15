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

const data = [
  { modelo: "110", medida: '1/4"' },
  { modelo: "111", medida: '5/16"' },
  { modelo: "113", medida: '3/8"' },
  { modelo: "115", medida: '1/2"' },
  { modelo: "116", medida: '5/8"' },
  { modelo: "117", medida: '3/4"' },
  { modelo: "118", medida: '1"' },
  { modelo: "122", medida: '1 1/4"' },
  { modelo: "123", medida: '1/4"' },
  { modelo: "126", medida: '5/16"' },
  { modelo: "127", medida: '3/8"' },
  { modelo: "130", medida: '1/2"' },
  { modelo: "135", medida: '5/8"' },
  { modelo: "150", medida: '3/4"' },
  { modelo: "163", medida: '1"' },
  { modelo: "1600", medida: '1 1/4"' },
  { modelo: "1700", medida: '1/4"' },
];

const CollapsibleTableRow = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell
          sx={{ fontFamily: '"Raleway", sans-serif', color: "#7F8C8D" }}
        >
          {row.modelo}
        </TableCell>
        <TableCell>
          <IconButton size="small" sx={{ color: "#7F8C8D" }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} style={{ padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography
                sx={{ fontFamily: '"Raleway", sans-serif', color: "#fff" }}
              >
                {row.medida}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TableData = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#272727", borderRadius: "20px", border:'1px solid #fff' }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontFamily: '"Raleway", sans-serif', color: "#3498db" }}
            >
              Modelo
            </TableCell>
            <TableCell
              sx={{ fontFamily: '"Raleway", sans-serif', color: "#3498db" }}
            >
              Medidas
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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
