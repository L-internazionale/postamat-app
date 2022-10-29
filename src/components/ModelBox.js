import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ModelBox() {
  return (
    <Box sx={{ minWidth: 120 }}>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="X" />
            <FormControlLabel control={<Checkbox />} label="Y" />
            <FormControlLabel control={<Checkbox />} label="Z" />
        </FormGroup>
    </Box>
  );
}
