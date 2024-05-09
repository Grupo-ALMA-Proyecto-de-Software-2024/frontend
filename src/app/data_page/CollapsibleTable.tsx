import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Collapse,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import styles from "./data.module.css";

// Estilo personalizado para la celda del encabezado
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

// Estilo personalizado para las filas impares
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.disk}
        </TableCell>
        <TableCell>{row.band}</TableCell>
        <TableCell>{row.spectroscopy}</TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Data Information
              </Typography>
              {/* Aquí se agregarán los datos de data y files */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Measurement Set</StyledTableCell>
                    <StyledTableCell>Cube</StyledTableCell>
                    <StyledTableCell>Moment 0</StyledTableCell>
                    <StyledTableCell>Moment 1</StyledTableCell>
                  </TableRow>
                </TableHead>
                {/* Aquí van los datos */}
                <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell>Select</TableCell>
                    <TableCell>Visualize</TableCell>
                    <TableCell>Visualize</TableCell>
                  </TableRow>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const rows = [
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Continuum' },
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Molecule 1'},
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Molecule 2' },
];

const CollapsibleTable: React.FC = () => {
  return (
    <TableContainer component={Paper} className={styles.TableContainer}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Disk</StyledTableCell>
            <StyledTableCell>Band</StyledTableCell>
            <StyledTableCell>Molecular Spectroscopy</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;