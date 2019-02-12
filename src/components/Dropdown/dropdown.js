import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

import "./dropdown.css";



export default class Dropdown extends React.Component {
  
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div id = "presets">
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
        <MoreVertIcon />
        </IconButton>

      <Button variant="contained">
        Login
      </Button>
     
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
        <MenuItem onClick={this.handleClose}>noj
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
        atoz
        </MenuItem>
        <MenuItem onClick={this.handleClose}>music</MenuItem>
        </Menu>
      </div>
    );
  }
}

