import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';

import "./dropdown.css";

const MyLink1 = props => <Link to="/" {...props} />
const MyLink2 = props => <Link to="/atoz" {...props} />
const MyLink3 = props => <Link to="/music" {...props} />




class Dropdown extends React.Component {
  
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.forceUpdate();

  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    window.location.reload();

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
        
        <MenuItem component={MyLink1} >noj</MenuItem>    
        <MenuItem component={MyLink2} >atoz</MenuItem>    
        <MenuItem component={MyLink3} >music</MenuItem>    
    
  
        </Menu>
      </div>
    );
  }
}

export default withRouter(Dropdown)