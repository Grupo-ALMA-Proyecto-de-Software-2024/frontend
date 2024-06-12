import React, { useState, useEffect, FC } from 'react';
import { Container } from "@mui/material";
import styles from "./dataSearcher.module.css";
import MultiSelect from './MultiSelect';
import DataContainer from '../data_container/DataContainer';
import { DiskDto, BandDto, MoleculeDto, DataDto } from '@api/dto';
import almaClient from '@api/client';
import DownloadButton from './DownloadButton';

interface FilterOption {
    value: string;
    label: string;
}

interface DataFilterContainerProps {
    title: string;
}

interface DataItem {
    name: string;
    creationDate: string;
    file: string;
    isViewable: boolean;
}

interface Molecule {
    name: string;
    data: DataItem[];
}

interface Band {
    name: string;
    molecules: Molecule[];
}

interface Disk {
    id: string;
    disk: string;
    bands: Band[];
}

const DataFilterContainer: FC<DataFilterContainerProps> = ({ title }) => {
    const [disks, setDisks] = useState<DiskDto[]>([]);
    const [bands, setBands] = useState<BandDto[]>([]);
    const [molecules, setMolecules] = useState<MoleculeDto[]>([]);
    const [data, setData] = useState<DataDto[]>([]);
    const [filteredData, setFilteredData] = useState<DataDto[]>([]);

    const [selectedDisks, setSelectedDisks] = useState<string[]>([]);
    const [selectedBands, setSelectedBands] = useState<string[]>([]);
    const [selectedMolecules, setSelectedMolecules] = useState<string[]>([]);
    const [selectedData, setSelectedData] = useState<string[]>([]);

    useEffect(() => {
        const fetchDisks = async () => {
            const fetchedDisks = await almaClient.getDisks({ region: [title] });
            setDisks(fetchedDisks);
        };
        fetchDisks();
    }, [title]);

    useEffect(() => {
        const fetchBands = async () => {
            const fetchedBands = await almaClient.getBands({ region: [title] });
            setBands(fetchedBands);
        };
        fetchBands();
    }, [title]);

    useEffect(() => {
        const fetchMolecules = async () => {
            const fetchedMolecules = await almaClient.getMolecules({ region: [title] });
            setMolecules(fetchedMolecules);
        };
        fetchMolecules();
    }, [title]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await almaClient.getData({ region: [title] });
            setData(fetchedData);
            setFilteredData(fetchedData); // Inicialmente, no hay filtros
        };
        fetchData();
    }, [title]);

    useEffect(() => {
        let filtered = data;
        if (selectedDisks.length > 0) {
            filtered = filtered.filter(d => selectedDisks.includes(d.file));
        }
        if (selectedBands.length > 0) {
            filtered = filtered.filter(d => selectedBands.includes(d.file));
        }
        if (selectedMolecules.length > 0) {
            filtered = filtered.filter(d => selectedMolecules.includes(d.file));
        }
        setFilteredData(filtered);
    }, [data, selectedDisks, selectedBands, selectedMolecules]);

    const convertToDisks = (data: DataDto[]): Disk[] => {
        return disks
            .filter(disk => selectedDisks.length === 0 || selectedDisks.includes(disk.name))
            .map(disk => ({
                id: disk.name,
                disk: disk.name,
                bands: disk.bands
                    .filter(band => selectedBands.length === 0 || selectedBands.includes(band.name))
                    .map(band => ({
                        name: band.name,
                        molecules: band.molecules
                            .filter(molecule => selectedMolecules.length === 0 || selectedMolecules.includes(molecule.name))
                            .map(molecule => ({
                                name: molecule.name,
                                data: molecule.data.filter(dataItem => selectedData.length === 0 || selectedData.includes(dataItem.name))
                            }))
                    }))
            }))
            .filter(disk => disk.bands.length > 0); // Filtrar discos que no tengan bandas válidas

    };

    return (
        <div className={styles.dataSelectorRow}>
            <Container sx={{ border: 1, borderRadius: '16px', margin: '15px', width: '1100px', justifyContent: 'flex-start' }}>
                <div className={styles.dataSelectorRow}>
                    <h2>{title}</h2>
                    <MultiSelect title="Disks" values={[...new Set(disks.map(disk => disk.name))]} onChange={setSelectedDisks} />
                    <MultiSelect title="Bands" values={[...new Set(bands.map(band => band.name))]} onChange={setSelectedBands} />
                    <MultiSelect title="Molecules" values={[...new Set(molecules.map(molecule => molecule.name))]} onChange={setSelectedMolecules} />
                    <MultiSelect title="Data" values={[...new Set(data.map(d => d.name))]} onChange={setSelectedData} />
                </div>
                <DataContainer data={convertToDisks(filteredData)} />
            </Container>
            <DownloadButton />
        </div>
    );
};

export default DataFilterContainer;