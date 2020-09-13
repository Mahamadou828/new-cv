import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { withRouter } from 'react-router-dom';

const Route = [
  'A propos de moi',
  'Parcours',
  'Portfolio',
  'Certificats',
  'Contact',
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

/**
 * Function that Returns HOC who Rendered the responsive sideBar
 * @param {JSX} Components Component Passed To The HOC
 * @returns {JSX} Return the Component to Render
 */
export default function (Components) {
  class ResponsiveSideBar extends Component {
    _redirect = (route) => {
      switch (route) {
        case Route[0]:
          this.props.history.push('/');
          break;
        default:
          this.props.history.push(`/${route}`);
          break;
      }
    };

    render() {
      const { pathname } = this.props.history.location;
      return (
        <div className="container">
          <SideBar
            className="display-none"
            redirectFunction={this._redirect}
            location={pathname}
          />
          <ResponsiveDrawer>
            <SideBar
              redirectFunction={this._redirect}
              className="drawer-menu"
              location={pathname}
            />
          </ResponsiveDrawer>
          <Components className="container-2" />
        </div>
      );
    }
  }

  ResponsiveSideBar.propTypes = {
    history: PropTypes.object,
  };

  return withRouter(ResponsiveSideBar);
}

/**
 * Function who Render the Sidebar Items List
 * @param {String} className CSS className passed to the component
 * @param {Function} redirectFunction Function who redirect the user
 * @param {String} location Current path of the user
 * @returns {JSX}
 */
function SideBar({ className, redirectFunction, location }) {
  const classes = useStyles();
  const filter = (element) => {
    if (location === '/') {
      return true;
    } else if (location.split('/')[1] === element) {
      return true;
    }
  };
  const [selectedIndex, setSelectedIndex] = React.useState(
    Route.findIndex(filter)
  );

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <nav className={`sidebar ${className}`}>
      <header>
        <h2 className="center">
          Mahamadou <br /> Samake
        </h2>
      </header>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {Route.map((item, index) => (
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) => {
                handleListItemClick(event, index);
                redirectFunction(item);
              }}
              className={
                selectedIndex === index ? 'selected listItem' : 'listItem'
              }
              key={index}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </div>
      <ul className="button-group">
        <li>
          <a className="btn btn-small">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a className="btn btn-small">
            <GitHubIcon />
          </a>
        </li>
      </ul>
      <h6 className="center">
        Mahamadou Samake <br /> 2020 @Tous droits reservé
      </h6>
    </nav>
  );
}

SideBar.propTypes = {
  className: PropTypes.string,
  redirectFunction: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};
