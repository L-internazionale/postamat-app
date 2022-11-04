import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';

export default function AccommodationBox() {
  return (
    <Box sx={{minWidth: 120}}>
        <div>
            <Button variant="contained">Launch</Button>
        </div>
        <div>
            <Button variant="contained">Download</Button>
        </div>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="format"
                name="radio-buttons-group"
            >
                <FormControlLabel value="pdf" control={<Radio />} label="PDF" />
                <FormControlLabel value="excel" control={<Radio />} label="EXCEL" />
            </RadioGroup>
        </FormControl>
    </Box>
  );
}
