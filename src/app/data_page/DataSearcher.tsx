"use client";
import React, { useState, useEffect, FC } from 'react';
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
import { DiskDto, BandDto, RegionDto } from '@api/dto';
import almaClient from '@api/client';

interface ElementsInSelect {
    title: string;
    values: string[];
    onChange?: (elements: string[]) => void;
}

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
        <FormControl sx={{ m: 2, width: 400 }}>
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
}

const ContainerBuilder: FC<ContainerBuilderProps> = ({ title }) => {
    
    const [disks, setDisks] = useState<DiskDto[]>([]);
    const [bands, setBands] = useState<BandDto[]>([]);

    const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
    const handleDisksChange = (disks: string[]) => {
        setSelectedDisks(disks);
    }

    const [selectedBands, setSelectedBands] = useState<string[]>([]);
    const handleBandsChange = (bands: string[]) => {
        setSelectedBands(bands);
    }
  
    const shouldShowTable = selectedDisks.length > 0 && selectedBands.length > 0;

    var diskValues: string[] = [];
    var bandValues: string[] = [];

    useEffect(() => {
        const fetchDisks = async () => {
            const disks = await almaClient.getDisks( {regions: [title]} );
            setDisks(disks);
        };

        fetchDisks();
    }, []);
    
    disks.forEach(disk => {
        diskValues.push(disk.name);
    });

    useEffect(() => {
        const fetchBands = async (disk: string) => {
            const bands = await almaClient.getBands( {disks: [disk]} );
            setBands(bands)
        };
        fetchBands(selectedDisks[0]);
    })
    bands.forEach(band => {
        bandValues.push(band.name);
    });

    return (
        <div className={styles.dataSelectorRow}>
            <Container sx={{
                border: 1,
                borderRadius: '16px',
                margin: '15px',
                width: '1100px',
                justifyContent: 'flex-start',
            }}>
                <div className={styles.dataSelectorRow}>
                    <h2>{title}</h2>
                    <MultiSelect title={"Disks"} values={diskValues} onChange={handleDisksChange} />
                    <MultiSelect title={"Bands"} values={bandValues} onChange={handleBandsChange} />
                </div>
                {shouldShowTable && <CollapsibleTable region={title} disks={selectedDisks} bands={selectedBands} />}
            </Container>
            <Button variant="outlined">Selected Files {<DownloadIcon></DownloadIcon>}</Button>
        </div>
    )
}

const DataSearcher = () => {
    
    const [regions, setRegions] = useState<RegionDto[]>([]);

    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const handleRegionChange = (regions: string[]) => {
        setSelectedRegions(regions);
    }

    var regionValues: string[] = [];

    useEffect(() => {
            const fetchRegions = async () => {
                const regions = await almaClient.getRegions();
                setRegions(regions);
            };
    
            fetchRegions();
    }, []);

    regions.forEach(region => {
        regionValues.push(region.name);
    });

    return (
        <div className={styles.regionSelectorColumn}>
            <h4>Select one or more regions</h4>
            <MultiSelect title={"Regions"} values={regionValues} onChange={handleRegionChange} />
            {selectedRegions.includes("Ophiucus") && (
                <ContainerBuilder title="Ophiucus" />
            )}
            {selectedRegions.includes("Lupus") && (    
                <ContainerBuilder title="Lupus" />
            )}
            {selectedRegions.includes("Upper Scorpius") && (
                <ContainerBuilder title="Upper Scorpius" />
            )}
        </div>
    );
};

export default DataSearcher;