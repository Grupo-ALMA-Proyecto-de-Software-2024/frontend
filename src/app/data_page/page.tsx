"use client"

import styles from "./data_page.module.css"
import {Heading, Text, Card, Box} from "@radix-ui/themes"
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import React, { useState } from 'react';
import DataCard from "@/components/dataCard/DataCard";

const DataPage = () => {
    return (
        <div className={styles.container}>
            <Heading size="9" className={styles.heading}>Data</Heading>
            <div className={styles.textContainer}>
                <Text>
                    The datasets, images, models, and data products needed to reproduce the results of MAPS I - 
                    XX are publicly available via the download presets below. In addition to these products, we provide:</Text>
                <Text>
                    <ul className={styles.table}>
                        <li>Self-calibrated measurement sets of all spectral windows covered by MAPS (see MAPS I)</li>
                        <li>Image cubes at three angular resolutions for the Band 3 lines (0”.3 and 0”.5 circularized beams, and Briggs robust=0.5 non-circularized), 
                            and three angular resolutions for the Band 6 lines (0”.15, 0”.2, and 0”.3 circularized, 
                            and robust=0.5 non-circularized), as well as the associated Keplerian CLEAN masks, CLEAN models, 
                            and python scripts. The 0.3” and robust=0.5 cubes are imaged both with and without continuum subtraction. 
                            All image cubes are delivered with and without primary beam correction, and with and without the so called JvM correction applied (Jorsater, S., & van Moorsel, G. A. 1995, AJ, 110, 2037) (see MAPS II)</li>
                        <li>Value added products for each line and spatial resolution: moment maps, rotational maps, peak intensity maps, and radial profiles (see MAPS III)</li>
                        <li>Emission surfaces for the strongest lines (see MAPS IV)</li>
                        <li>Continuum images for the four spectral settings (see MAPS XIV)</li>
                    </ul>
                </Text>
                <Text>
                    The interface below will allow you to directly search and select any of these products, 
                    in addition to the available download presets. The download button will generate a bash shell script to download the files you have selected. 
                    A bibtex file is also generated with all of the citations for the specific data that you have requested to download.
                </Text>
                <Text>
                    If you have questions, comments, or run into any issues, please contact us.
                </Text>
            </div>
            <div className={styles.searchContainer}>
                <DataCard
                    title="Ophiuchus"
                    description="Brief Description: Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed ut magna nec metus commodo consectetur."
                    fileSize={80}
                />
                <DataCard
                    title="Lupus"
                    description="Brief Description: Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed ut magna nec metus commodo consectetur."
                    fileSize={90}
                />
                <DataCard
                    title="UppSco"
                    description="Brief Description: Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed ut magna nec metus commodo consectetur."
                    fileSize={100}
                />
            </div>
        </div>
    );
};

export default DataPage;