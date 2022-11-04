import * as React from 'react';

import {  Box} from '@mui/material';
import DistrictsTypeBox from './DistrictsTypeBox';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
	<Box
	sx={{
	border: 2, 
	height: "100%",
	width: '100%',
	borderColor: '#bfbfbf',
	backgroundColor: "#f9f9f9",
	boxShadow: 0,
	borderRadius: 2,
	p: 2,
	minWidth: 300,
	}}
	>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            A.
        </Typography>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            B.
        </Typography>
        <DistrictsTypeBox/>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            C.
        </Typography>
    </Box>
  );
}
