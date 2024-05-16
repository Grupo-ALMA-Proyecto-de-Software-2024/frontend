"use client";
import React, { useState, useEffect, FC, useRef} from 'react';
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
import styles from "./dataSearcher.module.css";
import { DiskDto, BandDto, RegionDto } from '@api/dto';
import almaClient from '@api/client';
import DataContainer from '../data_container/DataContainer';

interface ElementsInSelect {
    title: string; 
    values: string[];
    onChange?: (elements: string[]) => void;
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
}

interface DataItem {
    id: number;
    Disk: string;
    Band: string;
    Data: number | null;
}

const ContainerBuilder: FC<ContainerBuilderProps> = ({ title }) => {
    
    const [disks, setDisks] = useState<DiskDto[]>([]);
    const [bands, setBands] = useState<BandDto[]>([]);
    const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
    const [selectedBands, setSelectedBands] = useState<string[]>([]);
    const [dataRows, setDataRows] = useState<any[]>([]); // Estado para almacenar los datos en el formato requerido
    const dataRowsRef = useRef<DataItem[]>([]);
    const idCounterRef = useRef<number>(0);

    useEffect(() => {
        const fetchDisks = async () => {
            const disks = await almaClient.getDisks({ region: [title] });
            console.log(disks)
            setDisks(disks);
        };

        fetchDisks();
    }, [title]);

    useEffect(() => {
        if (selectedDisks.length > 0) {
            const fetchBands = async () => {
                const bands = await almaClient.getBands( {disk: selectedDisks} );
                console.log(bands)
                setBands(bands);
            };
            fetchBands();
        }
    }, [selectedDisks]);

    useEffect(() => {
        if (selectedDisks.length > 0 && selectedBands.length > 0) {
            const newDataItem: DataItem = {
                id: idCounterRef.current,
                Disk: selectedDisks[0],
                Band: selectedBands[0],
                Data: null,
            };
            // Reinicializamos el array de datos con el nuevo elemento
            dataRowsRef.current = [newDataItem];
            idCounterRef.current += 1;
        } else {
            // Si no hay discos o bandas seleccionadas, reinicializamos el array de datos vacío
            dataRowsRef.current = [];
        }
    }, [selectedDisks, selectedBands]);

    const handleDisksChange = (disks: string[]) => {
        setSelectedDisks(disks);
    };

    const handleBandsChange = (bands: string[]) => {
        setSelectedBands(bands);
    };


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
                    <MultiSelect title="Disks" values={disks.map(disk => disk.name)} onChange={handleDisksChange} />
                    <MultiSelect title="Bands" values={bands.map(band => band.name)} onChange={handleBandsChange} />
                </div>
                {dataRowsRef.current.length > 0 && <DataContainer dataProps={dataRowsRef.current} />}
            </Container>
            <Button variant="outlined">Selected Files {<DownloadIcon/>}</Button>
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
            {selectedRegions.includes("Ophiuchus") && (
                <ContainerBuilder title="Ophiuchus" />
            )}
            {selectedRegions.includes("Lupus") && (    
                <ContainerBuilder title="Lupus" />
            )}
            {selectedRegions.includes("Upper Scorpius") && (
                <ContainerBuilder title="Upper Scorpius" />
            )}
        </div>
    )
}

export default DataSearcher;