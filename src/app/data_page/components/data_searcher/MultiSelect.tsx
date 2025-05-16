import React, { useState, useEffect, FC } from 'react';
import { Stack, OutlinedInput, InputLabel, MenuItem, Chip, Select, FormControl, SelectChangeEvent } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import styles from "./dataSearcher.module.css";

/**
 * Props for the MultiSelect component.
 */
interface ElementsInSelect {
    title: string;
    values: string[];
    onChange?: (elements: string[]) => void;
}

/**
 * Sorts strings by length first, then alphabetically
 * @param a First string to compare
 * @param b Second string to compare
 * @returns Comparison result
 */
const sortByLengthThenAlphabetically = (a: string, b: string): number => {
    // First compare by length
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    // If same length, compare alphabetically
    return a.localeCompare(b);
};

/**
 * MultiSelect component for selecting multiple items from a dropdown list.
 * @param {ElementsInSelect} props - The props for the component.
 */
const MultiSelect: FC<ElementsInSelect> = ({ title, values = [], onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    
    // Sort values based on the type of data (title)
    const sortedValues = [...values].sort((a, b) => {
        // Apply length-based sorting only for Disks and Bands
        if (title === "Disks" || title === "Bands") {
            return sortByLengthThenAlphabetically(a, b);
        }
        // Use standard alphabetical sorting for others (Molecules, Data, etc.)
        return a.localeCompare(b);
    });

    useEffect(() => {
        setSelectedOptions(prevSelectedOptions => 
            prevSelectedOptions.filter(option => values.includes(option))
        );
    }, [values]);

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newSelection = event.target.value as string[];
        setSelectedOptions(newSelection);
        onChange?.(newSelection);
    };

    return (
        <FormControl sx={{ m: 2, width: 400 }} className={styles.MultiSelect}>
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selectedOptions}
                onChange={handleChange}
                input={<OutlinedInput label={title} />}
                renderValue={(selected) => (
                    <Stack direction="row" gap={1} flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() => {
                                    const newSelection = selectedOptions.filter((item) => item !== value);
                                    setSelectedOptions(newSelection);
                                    onChange?.(newSelection);
                                }}
                                deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                            />
                        ))}
                    </Stack>
                )}
            >
                {sortedValues.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value} {selectedOptions.includes(value) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MultiSelect;