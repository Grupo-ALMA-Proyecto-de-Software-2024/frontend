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
import styles from "./dataSearcher.module.css";
import DataContainer from '../data_container/DataContainer';
import DownloadButton from './DownloadButton';
import { DiskDto, BandDto, RegionDto, MoleculeDto, DataDto } from '@api/dto';
import almaClient from '@api/client';

interface ElementsInSelect {
    title: string;
    values: string[];
    onChange?: (elements: string[]) => void;
}

const MultiSelect: FC<ElementsInSelect> = ({ title, values = [], onChange }) => {

    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    useEffect(() => {
        setSelectedNames(prevSelectedNames => prevSelectedNames.filter(name => values.includes(name)));
    }, [values]);

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

interface DataItem {
    id: number;
    Disk: string;
    Band: string;
    Data: number | null;
}

const ContainerBuilder: FC<ContainerBuilderProps> = ({ title }) => {
    
    const [disks, setDisks] = useState<DiskDto[]>([]);
    const [bands, setBands] = useState<BandDto[]>([]);
    const [molecules, setMolecules] = useState<MoleculeDto[]>([]);
    const [data, setData] = useState<DataDto[]>([]);

    const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
    const handleDisksChange = (disks: string[]) => {
        setSelectedDisks(disks);
    }

    const [selectedBands, setSelectedBands] = useState<string[]>([]);
    const handleBandsChange = (bands: string[]) => {
        setSelectedBands(bands);
    }

    const [selectedMolecules, setSelectedMolecules] = useState<string[]>([]);
    const handleMoleculesChange = (molecules: string[]) => {
        setSelectedMolecules(molecules);
    }
    const [selectedData, setSelectedData] = useState<string[]>([]);
    const handleDataChange = (data: string[]) => {
        setSelectedData(data);
    }
    var diskValues: string[] = [];
    var bandValues: string[] = [];
    var moleculeValues: string[] = [];
    var dataValues: string[] = [];

    useEffect(() => {
        const fetchDisks = async () => {
            const disks = await almaClient.getDisks( {region: [title]} );
            setDisks(disks);
        };

        fetchDisks();
    }, []);
    
    disks.forEach(disk => {
        diskValues.push(disk.name);
    });

    diskValues = diskValues.filter((item, index) => diskValues.indexOf(item) === index);

    useEffect(() => {
        const fetchBands = async (disks: string[]) => {
            const bands = await almaClient.getBands( {region: [title], disk: disks} );
            setBands(bands);
            setSelectedBands(prevSelectedBands => prevSelectedBands.filter(item => bands.some(bandItem => bandItem.name === item)));
        };

        fetchBands(selectedDisks);
    }, [selectedDisks])

    bands.forEach(band => {
        bandValues.push(band.name);
    });

    bandValues = bandValues.filter((item, index) => bandValues.indexOf(item) === index);

    useEffect(() => {
        const fetchMolecules = async (disks: string[], bands: string[]) => {
            const molecules = await almaClient.getMolecules( {region: [title], disk: disks, band: bands} );
            setMolecules(molecules);
            setSelectedMolecules(prevSelectedMolecules => prevSelectedMolecules.filter(item => molecules.some(moleculeItem => moleculeItem.name === item)));
        };

        fetchMolecules(selectedDisks, selectedBands);
    }, [selectedDisks, selectedBands])

    molecules.forEach(molecule => {
        moleculeValues.push(molecule.name);
    });

    moleculeValues = moleculeValues.filter((item, index) => moleculeValues.indexOf(item) === index);

    useEffect(() => {
        const fetchData = async (disks: string[], bands: string[], molecules: string[]) => {
            const data = await almaClient.getData( {region: [title], disk: disks, band: bands, molecule: molecules} );
            setData(data);
            setSelectedData(prevSelectedData => prevSelectedData.filter(item => data.some(dataItem => dataItem.name === item)));
        };
        fetchData(selectedDisks, selectedBands, selectedMolecules);
    }, [selectedDisks, selectedBands, selectedMolecules])

    data.forEach(data => {
        dataValues.push(data.name);
    });

    dataValues = dataValues.filter((item, index) => dataValues.indexOf(item) === index);

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
                    <MultiSelect title={"Molecules"} values={moleculeValues} onChange={handleMoleculesChange} />
                    <MultiSelect title={"Data"} values={dataValues} onChange={handleDataChange} />
                </div>
                <DataContainer />
            </Container>
            <DownloadButton />
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

    const render = regionValues.map((region) =>
        <div key={region}>
        {selectedRegions.includes(region) && (
            <ContainerBuilder title={region} />
        )}
        </div>
    );

    return (
        <div className={styles.regionSelectorColumn}>
            <h4>Select one or more regions</h4>
            <MultiSelect title={"Regions"} values={regionValues} onChange={handleRegionChange} />
            {render}
        </div>
    );
};

export default DataSearcher;
