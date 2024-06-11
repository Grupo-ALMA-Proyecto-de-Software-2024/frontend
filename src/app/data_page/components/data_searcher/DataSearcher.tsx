"use client"
import React, { useState, useEffect } from 'react';
import styles from "./dataSearcher.module.css";
import MultiSelect from './MultiSelect'; // Asegúrate de importar el archivo correcto
import DataFilterContainer from './DataFilterContainer'; // Asegúrate de importar el archivo correcto
import { RegionDto } from '@api/dto';
import almaClient from '@api/client';

const DataSearcher = () => {
    const [regions, setRegions] = useState<RegionDto[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

    useEffect(() => {
        const fetchRegions = async () => {
            const fetchedRegions = await almaClient.getRegions();
            setRegions(fetchedRegions);
        };
        fetchRegions();
    }, []);

    return (
        <div className={styles.regionSelectorColumn}>
            <h4>Select one or more regions</h4>
            <MultiSelect title="Regions" values={regions.map(region => region.name)} onChange={setSelectedRegions} />
            {selectedRegions.map(region => (
                <DataFilterContainer key={region} title={region} />
            ))}
        </div>
    );
};

export default DataSearcher;