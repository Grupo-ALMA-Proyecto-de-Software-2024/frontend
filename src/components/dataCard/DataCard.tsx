import * as React from 'react';
import { Heading, Text, Box, Card } from "@radix-ui/themes";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import styles from './dataCard.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

interface CustomCardProps {
    title: string;
    description: string;
    fileSize: number;
}

const DataCard: React.FC<CustomCardProps> = ({ title, description, fileSize }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <div className={styles.container}>
                    <Heading className={styles.heading}>
                        {title}
                    </Heading>
                    <Text className={styles.textBox}>
                        Brief Description: {description}
                    </Text>
                    <Box className={styles.detailsContainer}>
                        <Text>Total Files Sizes: {fileSize} Gb</Text>
                    </Box>
                    <Box>
                        <CheckBoxOutlineBlankRoundedIcon className={styles.checkBox} />
                    </Box>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/* Add More Content */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    >
                    <div className={styles.container}>
                        <Heading className={styles.heading}>
                            {title}
                        </Heading>
                        <Text className={styles.textBox}>
                            Brief Description: {description}
                        </Text>
                        <Box className={styles.detailsContainer}>
                            <Text>Total Files Sizes: {fileSize} Gb</Text>
                        </Box>
                        <Box>
                            <CheckBoxOutlineBlankRoundedIcon className={styles.checkBox} />
                        </Box>
                    </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        asdasdasdasd
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    );
};

export default DataCard;