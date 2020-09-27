import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';

const Language = [
  {
    title: 'HTML5',
    pourcent: 100,
  },
  {
    title: 'CSS3',
    pourcent: 100,
  },
  {
    title: 'JavaScript',
    pourcent: 100,
  },
  {
    title: 'SASS',
    pourcent: 100,
  },

  {
    title: 'SQL',
    pourcent: 90,
  },
  {
    title: 'PHP',
    pourcent: 80,
  },
];

const Framework = [
  {
    title: 'React.JS',
    pourcent: 100,
  },
  {
    title: 'Bootstrap',
    pourcent: 100,
  },
  {
    title: 'Material-UI',
    pourcent: 100,
  },
  {
    title: 'Redux',
    pourcent: 90,
  },
  {
    title: 'Express',
    pourcent: 100,
  },
];

const Database = [
  {
    title: 'MySql',
    pourcent: 90,
  },
  {
    title: 'MongoDb',
    pourcent: 80,
  },
];

const Plateforme = [
  {
    title: 'Node.JS',
    pourcent: 90,
  },
];

const Langue = [
  {
    title: 'Français',
    pourcent: 100,
  },
  {
    title: 'Russe',
    pourcent: 100,
  },
];

export default function Resume({ className }) {
  return (
    <section className={`${className} resume`}>
      <header className="global-page_title text-center space-magTop">
        <h2>Parcours</h2>
      </header>

      <div className="display-tablet display-row container display-space">
        <section className="notscroll">
          <header className="global-page_title underline text-center">
            <h3>Experience</h3>
          </header>
          <ul className="resume-timeline">
            <li>
              <h4>Développeur React/Nodejs</h4>
              <p className="resume-timeline_subtitle display-row">
                07/2020-09/2020<span className="line"></span>Amani Market
              </p>
              <p className="resume-timeline_text">
                En tant que dev freelance pour la compagnie AmaniMarket ma
                mission consistait à: <br /> • Créer le front-end du site en
                React.JS <br /> • Participer à la creation du Back-end en
                Node.Js <br /> • Créer le Back office du site. <br /> Le site
                fut developpé en React/Nodejs avec une base de donnee mySql.
                Pour la gestion de la base nous utilisions {`l'ORM`} sequelize
              </p>
            </li>
            <li>
              <h4>Développeur React/Nodejs</h4>
              <p className="resume-timeline_subtitle display-row">
                09/2020-10/2020<span className="line"></span>AOAC
              </p>
              <p className="resume-timeline_text">
                La mission consistait à developper tout un service permettant à
                la société de numérisé leur procédure cela va du développement:{' '}
                <br />
                • De la plateforme client <br /> • De la plateforme
                administrateur <br /> • De {`l'intégration`} de fonctionnalité
                tels que le depot de document en ligne etc <br /> Le site vu
                developper en Symfony/React pour des raisons {`d'herbergement`}
              </p>
            </li>
          </ul>
        </section>
        <section className="notscroll">
          <header className="global-page_title underline text-center">
            <h3>Parcours</h3>
          </header>
          <ul className="resume-timeline">
            <li>
              <h4>Openclassrooms</h4>
              <p className="resume-timeline_subtitle display-row">
                12/2019-05/2020<span className="line"></span>Developpeur web
              </p>
              <p className="resume-timeline_text">
                Formation de 6 mois en tant que Développeur web sur la
                plateforme française openclassrooms regroupant 7 projets: <br />
                • Création {`d'une`} landing avec des animations CSS <br />•
                Amélioration des performances SEO {`d'un`} site existant <br />•
                Création {`d'un`} site e-commerce en Javascript <br />• Création
                du Back-end {`d'une`} web app {`d'avis`} gastronomique en NodeJS
                <br />• Création {`d'un`} réseau social ReactJS/NodeJS
              </p>
            </li>
            <li>
              <h4>Mirea (Universite de technologie de moscou)</h4>
              <p className="resume-timeline_subtitle display-row">
                2017-2020<span className="line"></span>Filere système embarqué
              </p>
              <p className="resume-timeline_text">
                Boursier à {`l'université`} de technologie de Moscou, faculté
                ingénieur en électronique. Apres trois annees dans la filere
                systeme embarqué et {`l'obtention`} {`d'un`} ECTS{' '}
                {`j'actions: bindActionCreators(actions, dispatch)`} decide de
                me reconvertir dans la programmation web
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="notscroll space-maxTop">
        <header className="global-page_title underline text-center">
          <h3>Compétences</h3>
        </header>
        <div className="display-responsive_space resume-competence display-tablet space-magTop">
          <div className="resume-skill">
            <header className="global-page_title underline text-center">
              <h4>Language de Programmation</h4>
            </header>
            {Language.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </div>
          <div className="resume-skill">
            <header className="global-page_title underline text-center">
              <h4>Framework</h4>
            </header>
            {Framework.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </div>
        </div>
        <div className="display-responsive_space resume-competence display-tablet space-magTop">
          <div className="resume-skill">
            <header className="global-page_title underline text-center">
              <h4>Database</h4>
            </header>
            {Database.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </div>
          <div className="resume-skill">
            <header className="global-page_title underline text-center">
              <h4>Plateforme</h4>
            </header>
            {Plateforme.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </div>
        </div>

        <div className="display-column display-center space-magTop space-magBottom">
          <div className="resume-skill">
            <header className="global-page_title underline text-center">
              <h4>Langue</h4>
            </header>
            {Langue.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

Resume.propTypes = {
  className: PropTypes.string.isRequired,
};
