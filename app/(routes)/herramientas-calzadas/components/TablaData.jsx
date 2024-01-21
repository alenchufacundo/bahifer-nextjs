import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const data = [
  { modelo: "110", medida: '1/4"' },
  { modelo: "111", medida: '5/16"' },
  { modelo: "113", medida: '3/8"' },
  { modelo: "1115", medida: '1/2"' },
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

const TableData = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>MODELOS</TableCell>
            <TableCell>MEDIDAS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.modelo}>
              <TableCell>{row.modelo}</TableCell>
              <TableCell>{row.medida}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
