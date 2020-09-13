import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    margin: '0px',
    lineHeight: '1.1em',
  },
  entiled: {
    color: '#c5c5c5',
  },
});

function Progress({ title, pourcent }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5 className={classes.text}>
        <span>{title}</span>
        <span className={[classes.entiled, classes.text]}>{pourcent}%</span>
      </h5>
      <BorderLinearProgress
        className="progress"
        variant="determinate"
        value={pourcent}
      />
    </div>
  );
}

Progress.propTypes = {
  title: PropTypes.string.isRequired,
  pourcent: PropTypes.number.isRequired,
};

export default Progress;
