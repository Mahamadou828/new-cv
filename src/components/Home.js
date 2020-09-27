import { Button } from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CreateWaves } from '../function';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

/**
 * @function Home Render The Home Page View
 * @param {Object} param0 See PropTypes For More Details
 * @returns {JSX.Element}
 */
function Home({ className, redirect }) {
  React.useState(() => {
    setTimeout(() => {
      CreateWaves();
    }, 100);
  });
  return (
    <section className={`${className} home`}>
      <header className="home-header">
        <h1>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Samaké').start();
              }}
            />
          </span>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Mahamadou').start();
              }}
            />
          </span>
          {/* <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Dev FullStack').start();
              }}
            />
          </span> */}
        </h1>
        <Button
          className="btn btn-outline display-row home-btn"
          onClick={() => {
            redirect('/contact');
          }}
        >
          Contacter moi <ArrowForwardIcon />
        </Button>
      </header>
      <div className="waves" />
    </section>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};

export default Home;
