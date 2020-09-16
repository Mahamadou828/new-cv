import React from 'react';
import PropTypes from 'prop-types';
import AirplayIcon from '@material-ui/icons/Airplay';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Typewriter from 'typewriter-effect';

export default function Home({ className }) {
  return (
    <article className={`home ${className}`}>
      <header className="home-banner">
        <img
          src="http://mahamadou-cv.com/images/computer-1245714_1280.jpg"
          className="home-banner_image"
          alt=""
        />
        <div className="home-banner_text">
          <Typewriter
            options={{
              wrapperClassName: 'homme-banner_h2',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Back-End Scalable')
                .pauseFor(500)
                .deleteAll()
                .typeString('Front-End Flexible')
                .pauseFor(500)
                .deleteAll()
                .typeString('Je Suis Un Développeur FullStack')
                .start();
            }}
          />
          <h2>Mahamadou Samake</h2>
        </div>
      </header>

      <ul className="home-list">
        <li className="home-list_item">
          <h3>
            <span className="underline">Qui suis-je ?</span>{' '}
          </h3>
          <p>
            {`Développeur et autodidacte, je me suis lancé il y a 1 an  dans l'apprentissage de ce métier de la
            techn. Aujourd'hui j’aide les entreprise à développer des applications web leur permettant de profiter de l'ère du numérique
            , que ce soit des sites e-commerce, des sites vitrine ou des applications de gestion 
            ma priorité est de vous aider à simplifier votre activité.`}
          </p>
          <a
            href="http://mahamadou-cv.com/images/CV.pdf"
            className="btn-primary btn-medium"
            download
          >
            Telecharger Le Cv
          </a>
        </li>
        <li className="home-list_item">
          <h3>
            <span className="underline">Mes services</span>{' '}
          </h3>
          <div className="row">
            <section className="home-service">
              <AirplayIcon />
              <header>
                <h4>Web App</h4>
                <p>
                  Sites e-commerce, réseaux sociaux, admin manager ma mission
                  est de vous apportez une solution confortable et flexible afin
                  de résoudre vos problèmes.
                </p>
              </header>
            </section>
            <section className="home-service">
              <PhoneIphoneIcon />
              <header>
                <h4>Application Mobile</h4>
                <p>
                  Création {`d'application`} mobile cross-platform je developpe
                  une solution mobile à vos problèmes.
                </p>
              </header>
            </section>
          </div>
        </li>
      </ul>
    </article>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};
