import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  HMenu: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    '@media (max-width: 360px)': {
      right: '10px'
    },
  },
  iconB: {
    width: '110px',
    height: '110px',
    color: 'white',
    stroke: 'white',
    background: '#1f9285',
    '&:hover': {
      color: '#eca93d',
      stroke: '#eca93d',
      background: 'black',
      border: "2px solid #eca93d",
    },
    '@media (max-width: 1300px)': {
      width: '90px',
      height: '90px',
    },
    '@media (max-width: 1000px)': {
      width: '80px',
      height: '80px',
    },
    '@media (max-width: 500px)': {
      width: '70px',
      height: '70px',
    }
  },
  icon: {
    fontSize: 60,
    '@media (max-width: 1300px)': {
      fontSize: 55,
    },
    '@media (max-width: 1000px)': {
      fontSize: 50,
    },
    '@media (max-width: 500px)': {
      fontSize: 45,
    }
  }
});

const options = [
  'Contact',
  'Options',
  'More'
];

function HMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.HMenu}>
      <IconButton className={classes.iconB} aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} />
      </IconButton>

      <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: '150px',
            maxHeight: '150px',
            color: 'black',
            background: '#eca93d'
          },
        }}>
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default HMenu;