// import ReactHowler from 'react-howler'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
 // eslint-disable-next-line
import Typography from '@material-ui/core/Typography';



// import Play from 'react-icons/lib/ti/media-play-outline';
// import Pause from 'react-icons/lib/ti/media-pause-outline';
// import Loop from 'react-icons/lib/ti/arrow-loop';
// import Upload from 'react-icons/lib/ti/upload-outline';
const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Toolbar>
          
        </Toolbar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);