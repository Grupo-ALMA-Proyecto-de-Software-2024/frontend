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

interface RowProps {
  row: {
    disk: string;
    band: string;
    spectroscopy: string;
  };
}

const Row: React.FC<RowProps> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
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
      </TableRow>
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
                    <TableCell>Measurement Set</TableCell>
                    <TableCell>Cube</TableCell>
                    <TableCell>Moment 0</TableCell>
                    <TableCell>Moment 1</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const rows = [
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Continous' },
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Molecule 1'},
  { disk: 'Disk X', band: 'Band X', spectroscopy: 'Molecule 2' },
];

const CollapsibleTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{
        border: 1,
        borderRadius: '16px',
        marginRight: '20px',
        marginBottom: '20px',
    }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Disk</TableCell>
            <TableCell>Band</TableCell>
            <TableCell>Molecular Spectroscopy</TableCell>
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