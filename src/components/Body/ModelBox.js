import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container, Paper } from '@mui/material';

export default function ModelBox() {
  return (
	<Container sx={{
		maxWidth: '400px',
		marginTop: '2rem',
		padding: '1rem'
	}}>
		<Paper sx={{
			marginTop: '2rem',
			padding: '1rem'
		}}>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="X" />
            <FormControlLabel control={<Checkbox />} label="Y" />
            <FormControlLabel control={<Checkbox />} label="Z" />
        </FormGroup>
		</Paper>
	</Container>
  );
}
