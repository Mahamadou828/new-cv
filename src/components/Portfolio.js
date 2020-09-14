import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { BASE_ROUTE } from '..';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const Image = [
  'AOAC',
  'AmaniMarket',
  'Applan',
  'ChouetteAgency',
  'Groupomania',
  'Invest',
  'OhMyFood',
  'Pekito',
  'Sam&Co',
  'burgercommand',
  'ohmyfood',
  'startop',
  'travelagencyimg',
];

function Portfolio({ className }) {
  const classes = useStyles();

  return (
    <section className={`portfolio ${className}`}>
      <header className="header">
        <h2>Portfolio</h2>
        <span>Trouvez plus {`d'information`} sur githup</span>
      </header>

      <div className={`portfolio-content ${classes.root}`}>
        {Image.map((elt) => (
          <ButtonBase
            focusRipple
            key={elt}
            className={`${classes.image} portfolio-content_image`}
            focusVisibleClassName={classes.focusVisible}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${BASE_ROUTE}/images/${elt}.png)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {elt}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  className: PropTypes.string,
};

export default Portfolio;
