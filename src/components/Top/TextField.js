import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #dddddd',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `0 2px 4px 0 rgba(176, 73, 149, 0.21)`,
      borderColor: '#b04995',
    },
    '&.Mui-error': {
      borderColor: '#b04995',
    }
  },
  focused: {},
}));

const useStylesTextField = makeStyles(theme => ({
  root: {
    fontFamily: 'Muli',
    '& .MuiFormLabel-root': {
      color: '#8f8f8f',
      fontSize: 12,
      fontFamily: 'Muli',
      transform: 'none',
      top: 17,
      left: 13
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: '#b04995'
    },
    '& input': {
      color: 'black',
      fontSize: 14,
      fontWeight: 600,
      padding: '26px 12px 0',
      transition: 'padding 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    },
    '& .MuiFormLabel-filled + .MuiInputBase-root input': {
      padding: '35px 12px 14px'
    },
    '& .Mui-focused input': {
      padding: '35px 12px 14px'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: '#b04995',
      fontFamily: 'Muli',
      fontSize: 12
    }
  }
}));

function StyledTextField(props) {
  const classes = useStyles();
  const classesTextField = useStylesTextField();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      classes={classesTextField}
      {...props}
    />
  );
}

const CustomTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <StyledTextField
    variant="filled"
    fullWidth={true}
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default CustomTextField;