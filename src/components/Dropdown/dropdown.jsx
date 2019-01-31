import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./dropdown.css";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Toolbar >
          <IconButton className={classes.menuButton} color="black" aria-label="Menu">
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" color="black" className={classes.grow}>
            
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);