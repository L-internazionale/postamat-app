import * as React from 'react';

import {  Box, Card} from '@mui/material';
import DistrictsTypeBox from './DistrictsTypeBox';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CardList from './CardList'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function BasicCard() {

	const [chipData, setChipData] = React.useState([
		{ key: 0, label: 'Angular' },
		{ key: 1, label: 'jQuery' },
		{ key: 2, label: 'Polymer' },
		{ key: 3, label: 'React' },
		{ key: 4, label: 'Vue.js' },
		]);

	const [personName, setPersonName] = React.useState([]);

	const handleChange = (event) => {
			const {
			  target: { value },
			} = event;
			setPersonName(
			  // On autofill we get a stringified value.
			  typeof value === 'string' ? value.split(',') : value,
			);
		  };

  return (

	<Box
	sx={{
	border: 0, 
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
        <Typography sx={{fontSize: "18.5px", m:1, ml:0, fontWeight: 'bold'}} color="#000000" >
            Список выбранных районов : 
			<List
				sx={{
					mt: '1',
					width: '100%',
					bgcolor: 'transparent',
					position: 'relative',
					overflow: 'auto',
					maxHeight: 50,
					'& ul': { padding: 0 },
				}}
				subheader={<li />}
				>
					{chipData.map((data) => {
						let icon;

						if (data.label === 'React') {
						icon = <TagFacesIcon />;
						}

						return (
						<ListItem key={data.key}>
							<Chip
							sx={{
								fontSize: "15px",
								borderRadius: 2,
								border: 2,
								borderColor: '#000000',
								backgroundColor: 'rgba(255,255,255,0.4)',
								bgcolor: '#f52e47', // theme.palette.primary.main
								color: 'white',
								minWidth: '100%',
								':hover': {
										bgcolor: 'white', // theme.palette.primary.main
										color: '#000000',
										},
								}}
							variant="outlined"
							icon={icon}
							label={data.label}
							/>
						</ListItem>
						);
					})}
				</List>
        </Typography>
        
        <Typography sx={{fontSize: "18.5px", m:1, ml:0, fontWeight: 'bold'}} color="#000000" >
            Выберите места для размещения постаматов :
				<FormControl sx={{ mt: 2, mb:2, width:'100%',  border: 0, borderRadius: 1  }}>
					<Select
							sx={{
								mt: '1',
								width: '100%',
								bgcolor: 'transparent',
								position: 'relative',
								overflow: 'auto',
								maxHeight: 50,
								border: 2,
								borderRadius: 1
							}}
						labelId="demo-multiple-chip-label"
						id="demo-multiple-chip"
						multiple
						value={personName}
						onChange={handleChange}
						renderValue={(selected) => selected.join(', ')}
						input={<OutlinedInput sx={{ border: 0, borderRadius: 1 }} />}
						>
						{names.map((name) => (
							<MenuItem key={name} value={name}>
							<Checkbox checked={personName.indexOf(name) > -1} />
							<ListItemText primary={name} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
        </Typography>

        <Typography sx={{fontSize: "18.5px", m:1, ml:0, fontWeight: 'bold'}} color="#000000">
            Выберите модель расчета Индикатора Восстребованности :
			<Button
				sx={{ 
				p: 2,
				m: 1,
				ml:0,
				border: 2,
				color: '#f9f9f9',
				fontSize: 15, 
				fontWeight: 'bold',
				borderRadius: 3,
				borderColor: '#000000',
				bgcolor: '#f52e47',
				':hover': {
					bgcolor: '#f9f9f9', // theme.palette.primary.main
					color: '#000000',
					borderColor: '#000000',
					border: 2
					},
				}}
				
				variant="outlined"
				fullWidth
			>
				Модель Восстребованности
			</Button>
			<Button
				sx={{ 
				p: 2,
				m: 1,
				ml:0,
				border: 2,
				color: '#f9f9f9',
				fontSize: 15, 
				fontWeight: 'bold',
				borderRadius: 3,
				borderColor: '#000000',
				bgcolor: '#f52e47',
				':hover': {
					bgcolor: '#f9f9f9', // theme.palette.primary.main
					color: '#000000',
					borderColor: '#000000',
					border: 2
					},
				}}
				
				variant="outlined"
				fullWidth
			>
				Модель плотности
			</Button>
			<Button
				sx={{ 
				p: 2,
				m: 1,
				ml:0,
				border: 2,
				color: '#f9f9f9',
				fontSize: 15, 
				fontWeight: 'bold',
				borderRadius: 3,
				borderColor: '#000000',
				bgcolor: '#f52e47',
				':hover': {
					bgcolor: '#f9f9f9', // theme.palette.primary.main
					color: '#000000',
					borderColor: '#000000',
					border: 2
					},
				}}
				
				variant="outlined"
				fullWidth
			>
				Высчитать Индикатора
			</Button>
        </Typography>
		<Typography sx={{fontSize: "18.5px", m:1, ml:0, fontWeight: 'bold'}} color="#000000">
			<CardList/>
		</Typography>
    </Box>
  );
}
