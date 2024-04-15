"use client";
import React, { useState, FC } from 'react';
import {
    Stack,
    OutlinedInput,
    InputLabel,
    MenuItem,
    Chip,
    Select,
    FormControl,
    Container
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"
import CancelIcon from "@mui/icons-material/Cancel"
import styles from "./data.module.css";

interface ElementsInSelect {
    title: string; 
    values: string[];
}

let regiones: ElementsInSelect = {
    title: "Regiones",
    values: [
        "Ophiucus",
        "Lupus",
        "Upper Scorpius"
    ]
}

let discos: ElementsInSelect = {
    title: "Discos",
    values: [
        "Disco 1",
        "Disco 2",
        "Disco 3",
        "Disco 4",
        "Disco 5",
        "Disco N"
    ]
}

let bandas: ElementsInSelect = {
    title: "Bandas",
    values: [
        "Banda 6",
        "Banda 7",
        "Banda 8",
        "Banda N"
    ]
}

let datos: ElementsInSelect = {
    title: "Datos",
    values: [
        "Contínuo",
        "Molécula 1",
        "Molécula 2",
        "Molécula 3",
        "Molécula 4",
        "Molécula N",
    ]
}

let archivos: ElementsInSelect = {
    title: "Archivos",
    values: [
        "Measurement Set",
        "Mapa",
        "Cubo de canales",
        "Momento 0",
        "Momento 1"
    ]
}

const MultiSelect: FC<ElementsInSelect> = ({ title, values }) => {
    const [selectedNames, setSelectedNames] = useState([]);
    return (
        <FormControl sx={{ m: 4, width: 500 }}>
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selectedNames}
                onChange={(e) => setSelectedNames(e.target.value)}
                input={<OutlinedInput label="Multiple Select" />}
                renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() =>
                                    setSelectedNames(
                                        selectedNames.filter((item) => item !== value)
                                    )
                                }
                                deleteIcon={
                                    <CancelIcon
                                        onMouseDown={(event) => event.stopPropagation()}
                                    />
                                }
                            />
                        ))}
                    </Stack>
                )}
            >
                {values.map((value) => (
                    <MenuItem
                        key={value}
                        value={value}
                        sx={{ 
                            justifyContent: "space-between",
                        }}
                    >
                        {value}
                        {selectedNames.includes(value) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

const DataSearcher = () => {
    
    return (
        <Container
            sx={{ 
                border: 1,
                borderRadius: '16px',
                justifyContent: "center",
            }}
        >
            <MultiSelect title={regiones.title} values={regiones.values} />
            <MultiSelect title={discos.title} values={discos.values} />
            <MultiSelect title={bandas.title} values={bandas.values} />
            <MultiSelect title={datos.title} values={datos.values} />
            <MultiSelect title={archivos.title} values={archivos.values} />
        </Container>
    )
}

export default DataSearcher;