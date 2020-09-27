import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import { Button } from '@material-ui/core';

const avis = [
  {
    payload:
      'Mahamadou was one of the best talented student that I never had. I mentored him during his bachelor’s degree in web development at OpenClassrooms. Mahamadou started programming since youth. Very passionated, rigorous and autonomous for each project. He always have been involved and achieved it intime. For all these qualities I definitely recommend Mahamadou to anybody who’s looking for a great developer!',
    name: 'Danyl Semmache',
    role: 'Coach&Mentor',
    email: 'danyl.semmache@gmail.com ',
    stars: 5,
  },
  {
    payload:
      "Très professionnelle Mahamadou Samake m'a aidé dans mon projet en developpant une plateforme e-commerce performante et sur mesure. Fort de proposition il à su se demarquer par son autonomie. Je recommande Mahamadou à tout ceux qui cherche un bon developpeur pour créer leur projet web",
    name: 'Nathan Amani',
    role: 'Auto entrepreneur',
    email: 'amani.nathan@gmail.com',
    stars: 5,
  },
];

const clients = ['images/bmp.svg'];

function About({ className }) {
  const breakPoint = [
    { width: 650, itemsToShow: 1 },
    { width: 760, itemsToShow: 2 },
  ];
  const renderCarousel = () => {
    return (
      <Carousel
        itemsToShow={2}
        itemPadding={[10, 25]}
        enableAutoPlay
        autoPlaySpeed={3000}
        breakPoints={breakPoint}
        renderPagination={() => {
          return <div />;
        }}
        renderArrow={({ type, onClick, isEdge }) => {
          const icon =
            type === 'PREV' ? (
              <i className="fas fa-arrow-left"></i>
            ) : (
              <i className="fas fa-arrow-right"></i>
            );
          return (
            <Button
              className="about-avis_arrow"
              onClick={onClick}
              disabled={isEdge}
            >
              {icon}
            </Button>
          );
        }}
      >
        {avis.map((item, index) => {
          const stars = [];
          for (let i = 0; i < item.stars; i++) {
            stars.push(<i className="fas fa-star" key={i}></i>);
          }
          return (
            <div key={index} className="about-avis display-column">
              <p className="about-avis_payload">{item.payload}</p>
              <p className="about-avis_info display-row display-responsive_space">
                <span className="display-column">
                  <strong>{item.name}</strong>
                  <mark>{item.role}</mark>
                </span>
                <span>{stars}</span>
              </p>
            </div>
          );
        })}
      </Carousel>
    );
  };

  const renderClient = () => {
    return (
      <Carousel
        itemsToShow={1}
        itemPadding={[10, 25]}
        enableAutoPlay
        autoPlaySpeed={3000}
        // breakPoints={breakPoint}
        renderPagination={() => {
          return <div />;
        }}
        renderArrow={({ type, onClick, isEdge }) => {
          const icon =
            type === 'PREV' ? (
              <i className="fas fa-arrow-left"></i>
            ) : (
              <i className="fas fa-arrow-right"></i>
            );
          return (
            <Button
              className="about-avis_arrow"
              onClick={onClick}
              disabled={isEdge}
            >
              {icon}
            </Button>
          );
        }}
      >
        {clients.map((client, index) => (
          <div key={index} className="about-avis_client">
            <img src={client} />
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <section className={`${className} about`}>
      <header className="global-page_title text-center space-magTop">
        <h2>A Propos De Moi</h2>
      </header>

      <div className="space-magTop display-tablet container">
        <div className="img-thumbnail">
          <img src="images/computer-1245714_1280.jpg" />
        </div>
        <section className="about-info display-column notscroll">
          <header className="header">
            <h3>Développememt Web</h3>
          </header>
          <p>
            Bonjour! Je {`m'appelle`} <strong>Mahamadou</strong>. Web
            Développeur depuis des années {`j'accompagne`} les sociétés dans
            leur projet de création web. Spécialisé dans le développement
            fullstack en <strong>React/NodeJs</strong> je vise à vous apporter
            mon expertise grâce à des solutions créatives.
          </p>

          <div className="display-tablet">
            <ul>
              <li className="display-row">
                <p>
                  <strong>
                    <u>Nom</u>
                    <span>:</span>
                  </strong>
                  <span>Samaké Mahamadou</span>
                </p>
              </li>
              <li className="display-row">
                <p>
                  <strong>
                    <u>Email</u>
                    <span>:</span>
                  </strong>
                  <span>opmadou@gmail.com</span>
                </p>
              </li>
            </ul>
            <ul>
              <li className="display-row">
                <p>
                  <strong>
                    <u>Téléphone</u>
                    <span>:</span>
                  </strong>
                  <span>+7-920-682-74-43</span>
                </p>
              </li>
              <li className="display-row">
                <p>
                  <strong>
                    <u>Freelance</u>
                    <span>:</span>
                  </strong>
                  <span>Disponible</span>
                </p>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-primary btn-medium"
            href="../asset/CV.pdf"
            download
          >
            Télécharger le Cv
          </a>
        </section>
      </div>
      <section className="notscroll container space-magTop">
        <header className="global-page_title underline text-center ">
          <h2>Services</h2>
        </header>
        <div className="display-tablet contaire display-center">
          <section className="about-service display-column notscroll">
            <i className="fas fa-desktop"></i>
            <header>
              <h3>Web Développememt</h3>
            </header>
            <p>
              Création de back-office, {`d'application`} web en ReactJs. Je cree
              des sites modernes et performant avec les meilleurs technos du
              web.
            </p>
          </section>
          <div className="about-service">
            <section className="about-service display-column notscroll">
              <i className="fas fa-mobile-alt"></i>
              <header>
                <h3>Développement Mobile</h3>
              </header>
              <p>
                Création {`d'application`} mobile cross-platform grace à des
                outils comme React Native. Je vous garantit une application
                mobile de qualité
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="notscroll space-magTop">
        <header className="global-page_title underline text-center ">
          <h2>Avis</h2>
        </header>
        {renderCarousel()}
      </section>

      <section className="notscroll container space-magTop">
        <header className="global-page_title underline text-center ">
          <h2>Clients</h2>
        </header>

        {renderClient()}
      </section>
    </section>
  );
}

About.propTypes = {
  className: PropTypes.string.isRequired,
};

export default About;
