import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({ filter, setFilter, totalCount, incompleteCount, completedCount }) {
    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <Select
                labelId="filter-label"
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ padding: '1% 2%' }}
            >
                <MenuItem value="all">
                    <p>Tutti ({totalCount})</p>
                </MenuItem>
                <MenuItem value="todo">Da Fare ({incompleteCount})</MenuItem>
                <MenuItem value="completed">Completati ({completedCount})</MenuItem>
            </Select>
        </FormControl>
    );
}
