import React, { PureComponent } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ContactsIcon from '@material-ui/icons/Contacts';
import { RamdomNumber } from '../function';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';

const Route = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'A propos de moi',
    path: '/about',
  },
  {
    name: 'Parcours',
    path: '/resume',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  // 'Portfolio',
  // 'blog',
];
const RouteIcon = [
  <HomeIcon key={RamdomNumber()} />,
  <PersonIcon key={RamdomNumber()} />,
  <BusinessCenterIcon key={RamdomNumber()} />,
  <ContactsIcon key={RamdomNumber()} />,
];

/**
 * Function that Returns HOC who Rendered the responsive sideBar
 * @param {JSX.Element} Component Component Passed To The HOC
 * @param {Object} Props The App Passed Props
 * @param {Boolean} Props.redirect The App Redirect State
 * @param {Function} Props.setRedirect Function For Setting Redirect State
 * @returns {JSX} Return the Component to Render
 */
export default function (Component, Props) {
  /**
   * @class ContainerHelpers Hight Order Component For Manage The Animation State
   */
  class ContainerHelpers extends PureComponent {
    state = {
      openNav: false,
    };

    /**
     * @TODO Ecrire la fonction qui mettra a jour open Nav en fonction de l'etat de redirect
     * @TODO Creer Le Waves Effect
     */
    componentDidMount() {
      if (Props.redirect) {
        this.setState({
          openNav: true,
        });
        setTimeout(() => {
          this.setState({
            openNav: false,
          });
        }, 200);
      }
    }

    /**
     * @method setOpenNav Set The Open Nave Piece Of State
     */
    setOpenNav = () => {
      this.setState({
        openNav: !this.state.openNav,
      });
    };

    /**
     * @method redirectUser Redirect The User To The Correct Page And Set isRedirect To Truth
     * @param {String} path The Route Path
     * @returns {void}
     */
    redirectUser = (path) => {
      Props.setRedirect(true);
      this.props.history.push(path);
    };

    /**
     * @method renderNavbar Render The Navbar Component
     */
    renderNavbar = () => {
      const classes = this.state.openNav ? ' animate-nav' : '';
      return (
        <nav className={`main-nav display-column ${classes}`}>
          <List className="display-responsive">
            {Route.map((item, index) => (
              <ListItem
                button
                className="display-column"
                key={RamdomNumber()}
                onClick={() => {
                  this.redirectUser(item.path);
                }}
              >
                <ListItemIcon>{RouteIcon[index]}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <List className="display-responsive space-magTop display-dispear">
            <ListItem button className="display-column" key={RamdomNumber()}>
              <a href="linkedin.com/in/mahamadou-samaké">
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
              </a>
            </ListItem>
            <ListItem button className="display-column" key={RamdomNumber()}>
              <a href="https://github.com/Mahamadou828">
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
              </a>
            </ListItem>
          </List>
          <p className="text-center display-dispear">
            Tous droit réservé Mahamadou Samake
          </p>
        </nav>
      );
    };

    /**
     * @method redirectFunction Function For Redirected A User From Another Link
     * @param {String} path The Path Where The User Will Be Redirected
     */
    redirectFunction = (path) => {
      this.setState(
        {
          openNav: true,
        },
        () => {
          setTimeout(() => {
            Props.setRedirect(true);
            this.props.history.push(path);
          }, 500);
        }
      );
    };

    render() {
      const classes = this.state.openNav ? 'animate' : 'animate_not';
      const emptyPageClasses = this.state.openNav ? '' : 'close';
      return (
        <article className="global">
          <Button
            className="btn-primary btn-padding_none global-toggleNavigate"
            onClick={() => {
              this.setOpenNav();
            }}
          >
            <FormatListBulletedIcon />
          </Button>
          {this.renderNavbar()}
          <div
            className={`emptyPage emptyPage_1 emptyPage_${emptyPageClasses}`}
          />
          <div
            className={`emptyPage emptyPage_2 emptyPage_${emptyPageClasses}`}
          />
          <Component className={classes} redirect={this.redirectFunction} />
        </article>
      );
    }
  }

  ContainerHelpers.propTypes = {
    history: PropTypes.object,
  };

  return withRouter(ContainerHelpers);
}
