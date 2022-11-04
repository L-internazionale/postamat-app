import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
		sx={{ 
			p: 2,
			mt: 1.5,
			border: 2,
			minWidth: 300,
			color: 'white',
			fontSize: 20, 
			fontWeight: 'bold',
			borderRadius: 3,
			borderColor: '#000000',
			bgcolor: '#f52e47',
			':hover': {
				bgcolor: '#f9f9f9', // theme.palette.primary.main
				color: '#000000',
				borderColor: '#000000',
				border: 2
				}
			}}
		
		variant="outlined"
		fullWidth
		id="basic-button"
		aria-controls={open ? 'basic-menu' : undefined}
		aria-haspopup="true"
		aria-expanded={open ? 'true' : undefined}
		onClick={handleClick}
      >
        Выгрузить информацию с сайта
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
		anchorOrigin={{
			vertical: 'center',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'center',
			horizontal: 'center',
		}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Выгрузить Excel файл</MenuItem>
        <MenuItem onClick={handleClose}>Выгрузить PDF файл</MenuItem>
      </Menu>
    </div>
  );
}