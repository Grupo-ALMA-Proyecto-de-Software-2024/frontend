import React, { useState, useEffect, FC } from 'react';
import { Container } from "@mui/material";
import styles from "./dataSearcher.module.css";
import MultiSelect from './MultiSelect';
import DataContainer from '../data_container/DataContainer';
import { DiskDto, BandDto, MoleculeDto, DataDto } from '@api/dto';
import almaClient from '@api/client';

/**
 * Props for the DataFilterContainer component.
 */
interface DataFilterContainerProps {
    title: string;
}

/**
 * DataFilterContainer component to manage and display filtered data.
 * @param {DataFilterContainerProps} props - The props for the component.
 */
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
            setFilteredData(fetchedData); // Initially, no filters applied
        };
        fetchData();
    }, [title]);

    useEffect(() => {
        let filtered = data;
        if (selectedDisks.length > 0) {
            filtered = filtered.filter(d => selectedDisks.includes(d.filepath));
        }
        if (selectedBands.length > 0) {
            filtered = filtered.filter(d => selectedBands.includes(d.filepath));
        }
        if (selectedMolecules.length > 0) {
            filtered = filtered.filter(d => selectedMolecules.includes(d.filepath));
        }
        setFilteredData(filtered);
    }, [data, selectedDisks, selectedBands, selectedMolecules]);

    /**
     * Convert DataDto array to DiskDto array for displaying in DataContainer.
     * @param {DataDto[]} data - Array of DataDto objects.
     * @returns {DiskDto[]} - Array of DiskDto objects.
     */
    const convertToDisks = (data: DataDto[]): DiskDto[] => {
        return disks
            .filter(disk => selectedDisks.length === 0 || selectedDisks.includes(disk.name))
            .map(disk => ({
                ...disk,
                bands: disk.bands
                    .filter(band => selectedBands.length === 0 || selectedBands.includes(band.name))
                    .map(band => ({
                        ...band,
                        molecules: band.molecules
                            .filter(molecule => selectedMolecules.length === 0 || selectedMolecules.includes(molecule.name))
                            .map(molecule => ({
                                ...molecule,
                                data: molecule.data.filter(dataItem => selectedData.length === 0 || selectedData.includes(dataItem.name))
                            }))
                    }))
            }))
            .filter(disk => disk.bands.length > 0); // Filter disks with no valid bands
    };

    return (
        <div>
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
        </div>
    );
};

export default DataFilterContainer;