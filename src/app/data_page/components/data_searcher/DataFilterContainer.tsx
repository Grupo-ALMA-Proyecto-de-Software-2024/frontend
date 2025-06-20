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
    onOpenImage: (url: string) => void; // Add this prop to pass down
    selectedItems: Set<string>;
    setSelectedItems: React.Dispatch<React.SetStateAction<Set<string>>>;
}

/**
 * DataFilterContainer component to manage and display filtered data.
 * @param {DataFilterContainerProps} props - The props for the component.
 */
const DataFilterContainer: FC<DataFilterContainerProps> = ({ title, onOpenImage, selectedItems, setSelectedItems }) => {
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
            filtered = filtered.filter(d => selectedDisks.includes(d.disk));
        }
        if (selectedBands.length > 0) {
            filtered = filtered.filter(d => selectedBands.includes(d.band));
        }
        if (selectedMolecules.length > 0) {
            filtered = filtered.filter(d => selectedMolecules.includes(d.molecule));
        }
        if (selectedData.length > 0) {
            filtered = filtered.filter(d => selectedData.includes(d.name));
        }
        setFilteredData(filtered);
    }, [data, selectedDisks, selectedBands, selectedMolecules, selectedData]);

    /**
     * Convert DataDto array to DiskDto array for displaying in DataContainer.
     * @param {DataDto[]} data - Array of DataDto objects.
     * @returns {DiskDto[]} - Array of DiskDto objects.
     */
    const convertToDisks = (data: DataDto[]): DiskDto[] => {
        const diskMap: { [key: string]: DiskDto } = {};

        data.forEach(dataItem => {
            const { disk, band, molecule, ...rest } = dataItem;

            if (!diskMap[disk]) {
                diskMap[disk] = {
                    name: disk,
                    features: {},
                    bands: []
                };
            }

            let diskBands = diskMap[disk].bands;
            let bandObj = diskBands.find(b => b.name === band);

            if (!bandObj) {
                bandObj = {
                    name: band,
                    molecules: []
                };
                diskBands.push(bandObj);
            }

            let bandMolecules = bandObj.molecules;
            let moleculeObj = bandMolecules.find(m => m.name === molecule);

            if (!moleculeObj) {
                moleculeObj = {
                    name: molecule,
                    data: []
                };
                bandMolecules.push(moleculeObj);
            }

            moleculeObj.data.push({ disk, band, molecule, ...rest });
        });

        return Object.values(diskMap);
    };

    return (
        <div>
            <Container sx={{ border: 2, borderRadius: '16px', margin: '15px', width: '900px', height:'600px', justifyContent: 'flex-start' , backgroundColor:'snow'}}>
                <div className={styles.dataSelectorRow}>
                    <h2>{title}</h2>
                    <MultiSelect title="Disks" values={[...new Set(disks.map(disk => disk.name))]} onChange={setSelectedDisks} />
                    <MultiSelect title="Bands" values={[...new Set(bands.map(band => band.name))]} onChange={setSelectedBands} />
                    <MultiSelect title="Molecules" values={[...new Set(molecules.map(molecule => molecule.name))]} onChange={setSelectedMolecules} />
                    <MultiSelect title="Data Type" values={[...new Set(data.map(d => d.name))]} onChange={setSelectedData} />
                </div>
                <DataContainer data={convertToDisks(filteredData)} onOpenImage={onOpenImage} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </Container>
        </div>
    );
};

export default DataFilterContainer;