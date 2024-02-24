import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, medidas1, medidas2, medidas3) {
  return { name, medidas1, medidas2, medidas3 };
}

const rows = [
  createData("Milimetros", "", "", ""),
  createData("Medidas de calisuares", "6 - 7", "7 - 8", "8 - 9"),
  createData("Medidas de calisuares", "9 - 10", "10 - 11", "11 - 12"),
  createData("Medidas de calisuares", "12 - 14", "14 - 16", "16 - 18"),
  createData("Medidas de calisuares", "18 - 21", "21 - 24", "24 - 27.5"),
  createData("Medidas de calisuares", "27.5 - 31.5", "31.5 - 37", "37 - 45"),
  createData("Medidas de calisuares", "45 - 55", "55 - 65", ""),
];

export default function TablaData() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#272727",
        borderRadius: "20px",
        border: "1px solid #fff",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={8}
              align="center"
              sx={{
                color: "#3498db",
                fontSize: "24px",
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              {rows[0].name}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(1).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell
                align="center"
                component="th"
                scope="row"
                sx={{ color: "#fff" }}
              >
                {index > 0 ? null : row.name}
              </TableCell> */}
              <TableCell
                align="center"
                sx={{ color: "#fff", fontFamily: '"Raleway", sans-serif' }}
              >
                {row.medidas1}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontFamily: '"Raleway", sans-serif' }}
              >
                {row.medidas2}
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontFamily: '"Raleway", sans-serif' }}
              >
                {row.medidas3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
