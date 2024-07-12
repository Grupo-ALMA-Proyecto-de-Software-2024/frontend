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
    const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});
    const [modalImageUrl, setModalImageUrl] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchRegions = async () => {
            const fetchedRegions = await almaClient.getRegions();
            setRegions(fetchedRegions);
        };
        fetchRegions();
    }, []);

    const handleOpenImage = (region: string, url: string) => {
        setImageUrls(prev => ({ ...prev, [region]: url }));
    };

    const handleImageClick = (url: string) => {
        setModalImageUrl(url);
        setIsModalOpen(true);
    };

    const handleCloseImage = () => {
        setIsModalOpen(false);
        setModalImageUrl('');
    };

    return (
        <div className={styles.dataSearcher}>
            {selectedRegions.length > 0 && (
                <DownloadButton />
            )}
            <div className={styles.regionSelectorColumn}>
                <h4>Select one or more regions</h4>
                <MultiSelect title="Regions" values={regions.map(region => region.name)} onChange={setSelectedRegions}/>
            </div>
            <div className={styles.regionBlocks}>
                {selectedRegions.map(region => (
                    <div key={region} className={styles.regionBlock}>
                        <DataFilterContainer 
                            title={region} 
                            onOpenImage={(url: string) => handleOpenImage(region, url)} 
                        />
                        {imageUrls[region] && (
                            <div className={styles.RightImage} onClick={() => handleImageClick(imageUrls[region])}>
                                <img src={imageUrls[region]} alt="Selected" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Modal open={isModalOpen} onClose={handleCloseImage}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <img src={modalImageUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                </Box>
            </Modal>
        </div>
    );
};

export default DataSearcher;