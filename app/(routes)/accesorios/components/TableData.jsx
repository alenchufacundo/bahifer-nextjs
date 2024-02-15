import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { data } from "../utils/utils";

const rowsPerPageOptions = [5, 10, 25];

const TableData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const slicedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#272727",
          borderRadius: "30px",
          border: "1px solid #fff",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#3498db", fontWeight: "bold" }}>
                Categoría
              </TableCell>
              <TableCell sx={{ color: "#3498db", fontWeight: "bold" }}>
                Descripción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#fff" }}>{row.category}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage="Filas por pagina"
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: "#fff" }}
        />
      </TableContainer>
    </>
  );
};

export default TableData;
