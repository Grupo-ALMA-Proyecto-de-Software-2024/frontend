import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'disk', headerName: 'Disk', width: 260 },
    { field: 'band', headerName: 'Band', width: 260, },
    { field: 'molecularSpectroscopy', headerName: 'Molecular Spectroscopy', width: 260 },
];

const rows = [
    { id: 1, disk: 'Disk 1', band: "Band 6", molecularSpectroscopy: 'Continuous' },
    { id: 2, disk: 'Disk 1', band: "Band 6", molecularSpectroscopy: 'Molecule 1' },
    { id: 3, disk: 'Disk 1', band: "Band 6", molecularSpectroscopy: 'Molecule 2' },
    { id: 4, disk: 'Disk 1', band: "Band 6", molecularSpectroscopy: 'Molecule 3' },
    { id: 5, disk: 'Disk 1', band: "Band 7", molecularSpectroscopy: 'Continuous' },
    { id: 6, disk: 'Disk 1', band: "Band 7", molecularSpectroscopy: 'Molecule 1' },
    { id: 7, disk: 'Disk 1', band: "Band 7", molecularSpectroscopy: 'Molecule 2' },
    { id: 8, disk: 'Disk 1', band: "Band 7", molecularSpectroscopy: 'Molecule 3' },
    { id: 9, disk: 'Disk 2', band: "Band 6", molecularSpectroscopy: 'Continuous' },
    { id: 10, disk: 'Disk 2', band: "Band 6", molecularSpectroscopy: 'Molecule 1' },
    { id: 11, disk: 'Disk 2', band: "Band 6", molecularSpectroscopy: 'Molecule 2' },
    { id: 12, disk: 'Disk 2', band: "Band 6", molecularSpectroscopy: 'Molecule 3' },
    { id: 13, disk: 'Disk 2', band: "Band 7", molecularSpectroscopy: 'Continuous' },
    { id: 14, disk: 'Disk 2', band: "Band 7", molecularSpectroscopy: 'Molecule 1' },
    { id: 15, disk: 'Disk 2', band: "Band 7", molecularSpectroscopy: 'Molecule 2' },
    { id: 16, disk: 'Disk 2', band: "Band 7", molecularSpectroscopy: 'Molecule 3' },
];
  
export default function DataTable() {
    /* const [selectedMolecule, setSelectedMolecule] = useState<number | null>(null);
    const handleCellClick = (params: { row: GridRowData }) => {
        const moleculeId = params.row.id as number;
        setSelectedMolecule(moleculeId);
        console.log(selectedMolecule)
    } */
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          /* onCellClick={handleCellClick} */
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    );
}