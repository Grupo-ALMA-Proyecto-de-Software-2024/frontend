import React, { useState, useEffect, FC } from 'react';
import { Container, Button } from "@mui/material";
import styles from "./dataSearcher.module.css";
import MultiSelect from './MultiSelect'; // Asegúrate de importar el archivo correcto
import DataContainer from '../data_container/DataContainer';
import { DiskDto, BandDto, MoleculeDto, DataDto } from '@api/dto';
import almaClient from '@api/client';
import DownloadButton from './DownloadButton';

interface DataFilterContainerProps {
    title: string;
}

const DataFilterContainer: FC<DataFilterContainerProps> = ({ title }) => {
    const [disks, setDisks] = useState<DiskDto[]>([]);
    const [bands, setBands] = useState<BandDto[]>([]);
    const [molecules, setMolecules] = useState<MoleculeDto[]>([]);
    const [data, setData] = useState<DataDto[]>([]);

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
            const fetchedBands = await almaClient.getBands({ region: [title], disk: selectedDisks });
            setBands(fetchedBands);
        };
        fetchBands();
    }, [title, selectedDisks]);

    useEffect(() => {
        const fetchMolecules = async () => {
            const fetchedMolecules = await almaClient.getMolecules({ region: [title], disk: selectedDisks, band: selectedBands });
            setMolecules(fetchedMolecules);
        };
        fetchMolecules();
    }, [title, selectedDisks, selectedBands]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await almaClient.getData({ region: [title], disk: selectedDisks, band: selectedBands, molecule: selectedMolecules });
            setData(fetchedData);
        };
        fetchData();
    }, [title, selectedDisks, selectedBands, selectedMolecules]);

    const uniqueValues = (items: string[]) => [...new Set(items)];

    return (
        <div className={styles.dataSelectorRow}>
            <Container sx={{ border: 1, borderRadius: '16px', margin: '15px', width: '1100px', justifyContent: 'flex-start' }}>
                <div className={styles.dataSelectorRow}>
                    <h2>{title}</h2>
                    <MultiSelect title="Disks" values={uniqueValues(disks.map(disk => disk.name))} onChange={setSelectedDisks} />
                    <MultiSelect title="Bands" values={uniqueValues(bands.map(band => band.name))} onChange={setSelectedBands} />
                    <MultiSelect title="Molecules" values={uniqueValues(molecules.map(molecule => molecule.name))} onChange={setSelectedMolecules} />
                    <MultiSelect title="Data" values={uniqueValues(data.map(d => d.name))} onChange={setSelectedData} />
                </div>
                <DataContainer />
            </Container>
            <DownloadButton />
        </div>
    );
};

export default DataFilterContainer;