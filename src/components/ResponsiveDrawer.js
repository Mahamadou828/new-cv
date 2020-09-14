import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';

function ResponsiveDrawer({ children }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <React.Fragment key={'left'}>
        <div className="drawer">
          <h1>Développeur FullStack</h1>
          <Button onClick={toggleDrawer(true)}>
            <AppsIcon />
          </Button>
          {state ? (
            <Fab
              size="small"
              aria-label="add"
              className="drawer-close"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </Fab>
          ) : null}
        </div>
        <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
          {children}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ResponsiveDrawer;
