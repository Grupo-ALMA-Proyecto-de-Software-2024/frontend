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
 * MultiSelect component for selecting multiple items from a dropdown list.
 * @param {ElementsInSelect} props - The props for the component.
 */
const MultiSelect: FC<ElementsInSelect> = ({ title, values = [], onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
                {values.map((value) => (
                    <MenuItem key={value} value={value}>
                        {value} {selectedOptions.includes(value) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MultiSelect;