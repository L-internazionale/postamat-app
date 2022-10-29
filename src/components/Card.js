import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import SliderBox from './SliderBox';
import DistrictsTypeBox from './DistrictsTypeBox';
import AccommodationBox from './AccommodationBox';
import CheckoutBox from './CheckoutBox'

import ModelBox from './ModelBox'
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 600, minHeight: 950 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            A.
        </Typography>
        <SliderBox/>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            B.
        </Typography>
        <DistrictsTypeBox/>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            C.
        </Typography>
        <AccommodationBox/>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            D.
        </Typography>
        <ModelBox/>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            E.
        </Typography>
        <CheckoutBox/>
      </CardContent>
    </Card>
  );
}
