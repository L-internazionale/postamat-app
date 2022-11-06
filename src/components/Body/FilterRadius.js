import * as React from 'react';
import { Grid , Box, Select, FormControl, MenuItem, ListItemText, Checkbox, OutlinedInput, Button, InputAdornment, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { chooseRadius, chooseTypes } from '../../store/radiusSlice';
import CardList from './CardList'

const types = [
	{label: 'Киоски',
	 type: 'kiosks'},
	{label: 'Государственные Услуги',
	 type: 'gosuslugi'},
	{label: 'Библиотеки',
	 type: 'libraries'},
	{label: 'Спортивные объекты',
	 type: 'sport'},
	{label: 'Дома Культуры',
	 type: 'culture_clubs'},
  ];

export default function BasicCard() {

	const dispatch = useDispatch()

	const [typeName, setTypeName] = React.useState([]);
	const [values, setValues] = React.useState({
		radius: 10,
	  });

	const handleRadiusChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		dispatch(chooseRadius(event.target.value));
	  };

	const handleTypeChange = (event) => {
	const {
		target: { value },
	} = event;
	setTypeName(
		// On autofill we get a stringified value.
		typeof value === 'string' ? value.split(',') : value,
	);
	console.log(event)
	dispatch(chooseTypes(value))
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
			<Grid container>
				<Grid item xs={6} sx={{mt:1.5}}>
					Выберите радиус у точки:
				</Grid>
				<Grid item xs={6}>			
				<FormControl sx={{ width: '100%'}} variant="outlined">
				<OutlinedInput
					sx={{
									width: '100%',
									bgcolor: 'transparent',
									position: 'relative',
									overflow: 'auto',
									maxHeight: 50,
									border: 2,
									borderRadius: 1
								}}
					type='number'
					id="outlined-adornment-weight"
					value={values.radius}
					onChange={handleRadiusChange('radius')}
					endAdornment={<InputAdornment position="end">㎡</InputAdornment>}
					aria-describedby="outlined-weight-helper-text"
					inputProps={{
					'aria-label': 'radius',
					}}
				/>
				</FormControl>
				</Grid>
			</Grid>
        </Typography>
        
        <Typography sx={{fontSize: "18.5px", m:1, ml:0, fontWeight: 'bold'}} color="#000000" >
			<Grid container>
				<Grid item xs={6}>
				Выберите места для размещения постаматов :
				</Grid>
				<Grid item xs={6}>
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
						value={typeName}
						onChange={handleTypeChange}
						renderValue={(selected) => selected.join(', ')}
						input={<OutlinedInput sx={{ border: 0, borderRadius: 1 }} />}
						>
						{types.map((name) => (
							<MenuItem key={name.type} value={name.label}>
							<Checkbox checked={typeName.indexOf(name.type) > -1} />
							<ListItemText primary={name.label} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				</Grid>
			</Grid>
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
		<Typography>
			<CardList/>
		</Typography>
    </Box>
  );
}
