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
    Button,
    SelectChangeEvent
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadIcon from '@mui/icons-material/Download';
import styles from "./data.module.css";
import CollapsibleTable from './CollapsibleTable';

interface ElementsInSelect {
    title: string;
    values: string[];
    onChange?: (elements: string[]) => void;
}

const regions: ElementsInSelect = {
    title: "Regions",
    values: ["Ophiucus", "Lupus", "Upper Scorpius"]
};

const disks: ElementsInSelect = {
    title: "Disks",
    values: ["Disk 1", "Disk 2", "Disk 3", "Disk 4", "Disk 5", "Disk N"]
};

const bands: ElementsInSelect = {
    title: "Bands",
    values: ["Band 6", "Band 7", "Band 8", "Band N"]
};

const data: ElementsInSelect = {
    title: "Data",
    values: ["Continuous", "Molecule 1", "Molecule 2", "Molecule 3", "Molecule 4", "Molecule N"]
};

const files: ElementsInSelect = {
    title: "Files",
    values: ["Measurement Set", "Map", "Cube", "Momento 0", "Momento 1"]
};

const MultiSelect: FC<ElementsInSelect> = ({ title, values = [], onChange }) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newSelection = event.target.value as string[];
        setSelectedNames(newSelection);
        if (onChange) {
            onChange(newSelection);
        }
    };

    return (
        <FormControl sx={{ m: 0, width: 300 }}>
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selectedNames}
                onChange={handleChange}
                input={<OutlinedInput label={title} />}
                renderValue={(selected) => (
                    <Stack direction="row" gap={1} flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() => {
                                    const newSelection = selectedNames.filter((item) => item !== value);
                                    setSelectedNames(newSelection);
                                    if (onChange) {
                                        onChange(newSelection);
                                    }
                                }}
                                deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                            />
                        ))}
                    </Stack>
                )}
            >
                {values.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value} {selectedNames.includes(value) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

interface ContainerBuilderProps {
    title: string;
    select1: ElementsInSelect;
    select2: ElementsInSelect;
    shouldShowTable: boolean;
}

const ContainerBuilder: FC<ContainerBuilderProps> = ({ title, select1, select2, shouldShowTable }) => {
    return (
        <Container sx={{ border: 1, borderRadius: '16px', margin: '15px', width: '1100px', justifyContent: 'flex-start' }}>
            <div className={styles.regionSelectorRow}>
                <h2>{title}</h2>
                <MultiSelect {...select1} />
                <MultiSelect {...select2} />
            </div>
            <Button variant="outlined">Selected Files {<DownloadIcon />}</Button>
            {shouldShowTable && <CollapsibleTable />}
        </Container>
    );
};

const DataSearcher: FC = () => {
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [selectedDisk, setSelectedDisk] = useState<string[]>([]);
    const [selectedBand, setSelectedBand] = useState<string[]>([]);

    const handleRegionChange = (regions: string[]) => {
        setSelectedRegions(regions);
    };

    const handleDiskChange = (disk: string[]) => {
        setSelectedDisk(disk);
    };

    const handleBandChange = (band: string[]) => {
        setSelectedBand(band);
    };

    const shouldShowTable = selectedDisk.length > 0 && selectedBand.length > 0;

    return (
        <div className={styles.regionSelectorColumn}>
            <h4>Select one or more regions</h4>
            <MultiSelect title={regions.title} values={regions.values} onChange={handleRegionChange} />
            {selectedRegions.includes("Ophiucus") && (
                <ContainerBuilder title="Ophiucus" select1={{...disks, onChange: handleDiskChange}} select2={{...bands, onChange: handleBandChange}} shouldShowTable={shouldShowTable} />
            )}
            {selectedRegions.includes("Lupus") && (
                <ContainerBuilder title="Lupus" select1={{...disks, onChange: handleDiskChange}} select2={{...bands, onChange: handleBandChange}} shouldShowTable={shouldShowTable} />
            )}
            {selectedRegions.includes("Upper Scorpius") && (
                <ContainerBuilder title="Upper Scorpius" select1={{...disks, onChange: handleDiskChange}} select2={{...bands, onChange: handleBandChange}} shouldShowTable={shouldShowTable} />
            )}
        </div>
    );
};

export default DataSearcher;