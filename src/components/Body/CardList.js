import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Alert} from "@mui/material";
import { Container } from "@mui/system";


const card = {
  name: "улица Ленина  45",
  type: "Библиотека",
  rating: "100"
};
export default function SimpleCard() {

  const [cards, setCards] = React.useState([card, card]);

  return (
	<Box
	sx={{
	border: 0, 
	borderColor: '#bfbfbf',
	backgroundColor: "#f9f9f9",
	maxHeight: "95px",
	overflowY: "scroll",
	boxShadow: 0,
	borderRadius: 2,
	p: 0,
	}}
	> 
    <Grid container spacing={1}>
        {cards.map((cards, index) => {
          const { rating, name, type } = cards;
          return (
            <Grid item sx={{height:'100%'}}xs={12}>
              <Card key={index}  sx={{
				border: 1, 
				borderColor: '#000000',
				bgcolor: '#f52e47',
				':hover': {
					bgcolor: '#f9f9f9', // theme.palette.primary.main
					color: '#000000',
					borderColor: '#000000',
					border: 2
					},
				backgroundColor: "white",
				boxShadow: 0,
				borderRadius: 2,
				minWidth: 300,
				}} >
				<Grid container spacing={0}>
					<Grid item xs={4}>
					<Alert
					sx={{
						borderRadius: 2,
						m: 2,
						border: 2,
						borderColor: '#000000',
						backgroundColor: 'rgba(255,255,255,0.4)',
						color: '#000000',
						width: '100%'
						}}
					severity="error">
					<Typography align="center" sx={{fontSize: "15px", fontWeight: 'bold'}}>
											Индекс: {rating}
					</Typography>
					</Alert>
					</Grid>
					<Grid item xs={8} sx={{mt:2.5}}>
								<Typography align="center" sx={{fontSize: "15px", fontWeight: 'bold'}}>
								Адрес: {name}
								</Typography>
								<Typography align="center" sx={{fontSize: "15px", fontWeight: 'bold'}}>
								Тип Обьекта: {type}
								</Typography>
					</Grid>
				</Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
	</Box>
  );
}
