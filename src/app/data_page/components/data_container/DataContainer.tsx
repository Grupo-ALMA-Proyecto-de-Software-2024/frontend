"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from "./dataContainer.module.css";
import { DiskDto, BandDto, RegionDto } from '@api/dto';

/* Data de la documentacion de datagrid */
/* https://mui.com/x/react-data-grid/ */
const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Disk',
      headerName: 'Disk',
      width: 150,
      editable: true,
    },
    {
      field: 'Band',
      headerName: 'Band',
      width: 150,
      editable: true,
    },
    {
      field: 'Data',
      headerName: 'Data',
      width: 110,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, Disk: 'Snow', Band: 'Jon', Data: 14 },
    { id: 2, Disk: 'Lannister', Band: 'Cersei', Data: 31 },
    { id: 3, Disk: 'Lannister', Band: 'Jaime', Data: 31 },
    { id: 4, Disk: 'Stark', Band: 'Arya', Data: 11 },
    { id: 5, Disk: 'Targaryen', Band: 'Daenerys', Data: null },
    { id: 6, Disk: 'Melisandre', Band: null, Data: 150 },
    { id: 7, Disk: 'Clifford', Band: 'Ferrara', Data: 44 },
    { id: 8, Disk: 'Frances', Band: 'Rossini', Data: 36 },
    { id: 9, Disk: 'Roxie', Band: 'Harvey', Data: 65 },
  ];

interface DataItem {
    id: number;
    Disk: string;
    Band: string;
    Data: number | null; // Ajusta el tipo de datos según corresponda
}
interface DataContainerProps {
    dataProps: DataItem[];
}

const DataContainer: React.FC<DataContainerProps> = ({ dataProps }) => {
    console.log(dataProps)
    return(
        <div className={styles.DataContainerExt}>
            <div className={styles.DataContainerInt}>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={dataProps}
                        columns={columns}
                        initialState={{pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        />
                </Box>
            </div>
        </div>
    );
};

export default DataContainer;