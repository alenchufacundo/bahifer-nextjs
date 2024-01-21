"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name) {
  return {
    name,
    modelos: [
      {
        group: "W",
        items: [
          "1/16 60 HILOS",
          "3/32 48 HILOS",
          "1/8 40 HILOS",
          "5/32 32 HILOS",
          "3/16 24 HILOS",
          "7/32 24 HILOS",
          "1/4 20 HILOS",
          "5/16 18 HILOS",
          "3/8 16 HILOS",
          "7/16 14 HILOS",
          "1/2 12 HILOS",
          "9/16 12 HILOS",
          "5/8 11 HILOS",
          "11/16 11 HILOS",
          "3/4 10 HILOS",
          "7/8 9 HILOS",
          "1 9 HILOS",
        ],
      },
      {
        group: "MM GRUESO",
        items: [
          "3 PASO 0.50",
          "3.5 PASO 0.60",
          "4 PASO 0.70",
          "5 PASO 0.80",
          "6 PASO 1",
          "7 PASO 1",
          "8 PASO 1.25",
          "9 PASO 1.25",
          "10 PASO 1.50",
          "11 PASO 1.50",
          "12 PASO 1.75",
          "14 PASO 2",
          "16 PASO 2",
          "18 PASO 2.50",
          "20 PASO 2.50",
          "22 PASO 2.50",
          "24 PASO 3",
        ],
      },
      {
        group: "MM FINO",
        items: [
          "8 PASO 1",
          "10 PASO 1",
          "10 PASO 1.25",
          "11 PASO 1",
          "12 PASO 1",
          "12 PASO 1.25",
          "12 PASO 1.50",
          "14 PASO 1",
          "14 PASO 1.25",
          "14 PASO 1.50",
          "16 PASO 1.50",
          "18 PASO 1",
          "18 PASO 1.50",
          "18 PASO 2",
          "20 PASO 1.50",
          "20 PASO 2",
          "22 PASO 1.50",
          "24 PASO 1.50",
        ],
      },
      {
        group: "NF",
        items: [
          "Nº3 56 HILOS",
          "Nº4 48 HILOS",
          "Nº5 44 HILOS",
          "Nº6 40 HILOS",
          "Nº8 36 HILOS",
          "Nº10 32 HILOS",
          "Nº12 28 HILOS",
          "1/4 28 HILOS",
          "5/16 24 HILOS",
          "3/8 24 HILOS",
          "7/16 20 HILOS",
          "1/2 20 HILOS",
          "9/16 18 HILOS",
          "5/8 18 HILOS",
          "3/4 16 HILOS",
          "7/8 14 HILOS",
          "1 12 HILOS",
        ],
      },
      {
        group: "NS",
        items: ["1 14 HILOS"],
      },
      {
        group: "NC",
        items: [
          "Nº3 48 HILOS",
          "Nº4 40 HILOS",
          "Nº5 40 HILOS",
          "Nº6 32 HILOS",
          "Nº8 32 HILOS",
          "Nº10 24 HILOS",
          "Nº12 24 HILOS",
          "1/4 20 HILOS",
          "5/16 18 HILOS",
          "3/8 16 HILOS",
          "7/16 14 HILOS",
          "1/2 13 HILOS",
        ],
      },
      {
        group: "BSP",
        items: [
          "1/8 28 HILOS",
          "1/4 19 HILOS",
          "3/8 19 HILOS",
          "1/2 14 HILOS",
          "5/8 14 HILOS",
          "3/4 14 HILOS",
          "7/8 14 HILOS",
          "1 11 HILOS",
        ],
      },
      {
        group: "BSPT",
        items: [
          "1/8 28 HILOS",
          "1/4 19 HILOS",
          "3/8 19 HILOS",
          "1/2 14 HILOS",
          "3/4 14 HILOS",
          "1 11 HILOS",
          "1 1/4 11 HILOS",
          "1 1/2 11 HILOS",
          "2 11 HILOS",
        ],
      },
      {
        group: "NPT",
        items: [
          "1/8 27 HILOS",
          "1/4 18 HILOS",
          "3/8 18 HILOS",
          "1/2 14 HILOS",
          "3/4 14 HILOS",
          "1 11 1/2 HILOS",
        ],
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const renderModelosByName = (name) => {
    const modelos =
      row.modelos
        .filter((model) => model.group === name)
        .flatMap((group) => group.items) || [];
    return (
      <React.Fragment key={name}>
        <Table size="small" aria-label="purchases">
          <TableHead></TableHead>
          <TableBody>
            {modelos.map((historyRow) => (
              <TableRow key={historyRow}>
                <TableCell component="th" scope="row">
                  {historyRow}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {renderModelosByName(row.name)}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("W"),
  createData("MM GRUESO"),
  createData("MM FINO"),
  createData("NF"),
  createData("NS"),
  createData("NC"),
  createData("BSP"),
  createData("BSPT"),
  createData("NPT"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Machos URANGA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
