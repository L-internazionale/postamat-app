import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterDistrict from './FilterDistrict'
import FilterRadius from './FilterRadius'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, mt: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs 
		sx={{'&.Mui-selected': {
						color: '#f52e47',
						fontWeight: 'bold',
					},}}
		textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
		value={value} centered onChange={handleChange}>
          <Tab
		   sx={{
			textTransform: 'none',
			minWidth: 0,
			fontSize: '18.5px',
			fontWeight: 'bold',
			color: 'rgba(0, 0, 0, 0.85)',
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			'&:hover': {
				color: '#f52e47',
				opacity: 1,
			},
			'&.Mui-selected': {
				color: '#040404',
				fontWeight: 'bold',
			},
			'&.Mui-focusVisible': {
				backgroundColor: '#d1eaff',
			},
		   }}
		   label="Поиск по районам и округам"  />
          <Tab 
		  	sx={{
			textTransform: 'none',
			minWidth: 0,
			fontSize: '18.5px',
			fontWeight: 'bold',
			color: 'rgba(0, 0, 0, 0.85)',
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			'&:hover': {
				color: '#f52e47',
				opacity: 1,
			},
			'&.Mui-selected': {
				color: '#040404',
				fontWeight: 'bold',
			},
			'&.Mui-focusVisible': {
				backgroundColor: '#d1eaff',
			},
		}}
		  label="Поиск по точке с радиусом" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FilterDistrict/>
      </TabPanel>
      <TabPanel value={value} index={1}>
	    <FilterRadius/>
      </TabPanel>
    </Box>
  );
}
