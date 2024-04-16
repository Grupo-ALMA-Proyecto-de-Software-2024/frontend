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
    Container,
    Button
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"
import CancelIcon from "@mui/icons-material/Cancel"
import DownloadIcon from '@mui/icons-material/Download'
import styles from "./data.module.css";

interface ElementsInSelect {
    title: string; 
    values: string[];
    onChange?: (elements: string[]) => void;
}

let regions: ElementsInSelect = {
    title: "Regions",
    values: [
        "Ophiucus",
        "Lupus",
        "Upper Scorpius"
    ]
}

let disks: ElementsInSelect = {
    title: "Disks",
    values: [
        "Disco 1",
        "Disco 2",
        "Disco 3",
        "Disco 4",
        "Disco 5",
        "Disco N"
    ]
}

let bands: ElementsInSelect = {
    title: "Bands",
    values: [
        "Banda 6",
        "Banda 7",
        "Banda 8",
        "Banda N"
    ]
}

let data: ElementsInSelect = {
    title: "Data",
    values: [
        "Contínuo",
        "Molécula 1",
        "Molécula 2",
        "Molécula 3",
        "Molécula 4",
        "Molécula N",
    ]
}

let files: ElementsInSelect = {
    title: "Files",
    values: [
        "Measurement Set",
        "Mapa",
        "Cubo de canales",
        "Momento 0",
        "Momento 1"
    ]
}


const MultiSelect: FC<ElementsInSelect> = ({ title, values, onChange }) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);
    const handleChange = (newSelection: string[]) => {
        setSelectedNames(newSelection);
        if (onChange) {
            onChange(newSelection);
        }
    }
    return (
        <div className={styles.regionSelectorColumn}>
            <FormControl sx={{ m: 0, width: 385}}>
                <InputLabel>Select {title}</InputLabel>
                <Select
                    multiple
                    value={selectedNames}
                    onChange={(e) => handleChange(e.target.value as string[])}
                    input={<OutlinedInput label="Multiple Select" />}
                    sx={{ backgroundColor: "#E7EFEF" }}
                    renderValue={(selected) => (
                        <Stack gap={1} direction="row" flexWrap="wrap">
                            {selected.map((value) => (
                                <Chip
                                key={value}
                                label={value}
                                onDelete={() => {
                                    const newSelection = selectedNames.filter((item) => item !== value);
                                    setSelectedNames(newSelection);
                                    handleChange(newSelection);
                                }}
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
                                backgroundColor: 'white',
                            }}
                            >
                            {value}
                            {selectedNames.includes(value) ? <CheckIcon color="info" /> : null}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

interface ContainerBuilderProps {
    title: string;
    select1: ElementsInSelect;
    select2: ElementsInSelect;
}

const ContainerBuilder: FC<ContainerBuilderProps> = ({ title, select1, select2 }) => {
    return (
        <div className={styles.regionSelectorRow}>
            <Container sx={{
                border: 1,
                borderRadius: '16px',
                margin: '15px',
                width: '1100px',
                justifyContent: 'flex-start',
            }}>
                <div className={styles.regionSelectorRow}>
                    <h2>{title}</h2>
                    <MultiSelect title={select1.title} values={select1.values} />
                    <MultiSelect title={select2.title} values={select2.values} />
                </div>
            </Container>
            <Button variant="outlined">Selected Files {<DownloadIcon></DownloadIcon>}</Button>
        </div>
    )
}

const DataSearcher = () => {
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const handleRegionChange = (regions: string[]) => {
        setSelectedRegions(regions);
    }
    return (
        <div className={styles.regionSelectorColumn}>
            <h4>Select one or more regions</h4>
            <MultiSelect title={regions.title} values={regions.values} onChange={handleRegionChange} />
            {selectedRegions.includes("Ophiucus") && (
                <ContainerBuilder title="Ophiucus" select1={disks} select2={bands} />
            )}
            {selectedRegions.includes("Lupus") && (    
                <ContainerBuilder title="Lupus" select1={disks} select2={bands} />
            )}
            {selectedRegions.includes("Upper Scorpius") && (
                <ContainerBuilder title="Upper Scorpius" select1={disks} select2={bands} />
            )}
        </div>
    )
}

export default DataSearcher;