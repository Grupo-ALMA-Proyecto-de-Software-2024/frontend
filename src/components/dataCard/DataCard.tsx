import { useState } from 'react';
import { Heading, Text, Box , Card} from "@radix-ui/themes";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import styles from './dataCard.module.css';

interface CustomCardProps {
    title: string;
    description: string;
    fileSize: number;
}

const DataCard: React.FC<CustomCardProps> = ({ title, description, fileSize }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(prev => !prev);
    };

    return (
        <Card className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
            <Heading className={styles.heading}>
                {title}
            </Heading>
            <Text className={styles.textBox}>
                Brief Description: {description}
            </Text>
            <Box className={styles.detailsContainer}>
                <Text>Total Files Sizes: {fileSize} Gb</Text>
                <Text className={styles.expand} onClick={toggleExpand}>
                    Expand Files <ExpandMoreRoundedIcon />
                </Text>
            </Box>
            <Box>
                <CheckBoxOutlineBlankRoundedIcon className={styles.checkBox} />
            </Box>
        </Card>
    );
};

export default DataCard;