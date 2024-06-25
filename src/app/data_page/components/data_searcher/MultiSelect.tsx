import React, { useState, useEffect, FC } from 'react';
import { Stack, OutlinedInput, InputLabel, MenuItem, Chip, Select, FormControl, SelectChangeEvent } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

interface ElementsInSelect {
    title: string;
    values: string[];
    onChange?: (elements: string[]) => void;
}

const MultiSelect: FC<ElementsInSelect> = ({ title, values = [], onChange }) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    useEffect(() => {
        setSelectedNames(prevSelectedNames => prevSelectedNames.filter(name => values.includes(name)));
    }, [values]);

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newSelection = event.target.value as string[];
        setSelectedNames(newSelection);
        onChange?.(newSelection);
    };

    return (
        <FormControl sx={{ m: 2, width: 400 }}>
            <InputLabel>{title}</InputLabel>
            <Select
                multiple
                value={selectedNames}
                onChange={handleChange}
                input={<OutlinedInput label={title} />}
                renderValue={(selected) => (
                    <Stack direction="row" gap={1} flexWrap="wrap">
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                onDelete={() => {
                                    const newSelection = selectedNames.filter((item) => item !== value);
                                    setSelectedNames(newSelection);
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
                        {value} {selectedNames.includes(value) ? <CheckIcon color="info" /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MultiSelect;