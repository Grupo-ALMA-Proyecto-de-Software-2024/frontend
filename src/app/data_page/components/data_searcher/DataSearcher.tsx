"use client";
import React, { useState, useEffect } from 'react';
import styles from "./dataSearcher.module.css";
import MultiSelect from './MultiSelect';
import DataFilterContainer from './DataFilterContainer';
import { RegionDto } from '@api/dto';
import almaClient from '@api/client';
import DownloadButton from './DownloadButton';
import { Modal, Box } from '@mui/material';

/**
 * DataSearcher component to manage and display region selection and data filtering.
 */
const DataSearcher = () => {
    const [regions, setRegions] = useState<RegionDto[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchRegions = async () => {
            const fetchedRegions = await almaClient.getRegions();
            setRegions(fetchedRegions);
        };
        fetchRegions();
    }, []);

    const handleOpenImage = (url: string) => {
        setImageUrl(url);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseImage = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.TableBox}>
            {selectedRegions.length > 0 && (
                <DownloadButton />
            )}
            <div className={styles.regionSelectorColumn}>
                <h4>Select one or more regions</h4>
                <MultiSelect title="Regions" values={regions.map(region => region.name)} onChange={setSelectedRegions} />
            </div>
            <div className={styles.TableAndImage}>
                {selectedRegions.map(region => (
                    <div key={region} className={styles.regionBlock}>
                        <DataFilterContainer title={region} onOpenImage={handleOpenImage} />
                        {imageUrl && (
                            <div className={styles.RightImage} onClick={handleImageClick}>
                                <img src={imageUrl} alt="Selected" style={{ maxWidth: '200px', margin: '20px' }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataSearcher;