import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function DistrictsTypeBox() {
  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl>
            <FormLabel id="district-type">Type of districts</FormLabel>
            <RadioGroup defaultValue="district">
                <FormControlLabel value="district" control={<Radio />} label="District" />
                <FormControlLabel value="admin" control={<Radio />} label="Administrative Districts" />
            </RadioGroup>
        </FormControl>
    </Box>
  );
}
