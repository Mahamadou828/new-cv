import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';
import Progress from './Progress';

const ProfessionnalExp = [
  {
    title: 'Juin 2020 — Présent',
    subtitle: 'Développeur FullStack',
    entitled: ' AmaniMarket, Moscou',
    description: `
        • Création du front-end du site e-commerce.
        • Intégration du design.
        • Création de la partie admin pour gérer le stock des produits.
        • Création du Back-end du site en nodeJS, implémentation de la base de donnée mySql.`,
  },
  {
    title: 'Juin 2020 — Août 2020',
    subtitle: 'Développeur FullStack',
    entitled: 'AOAC, Congo',
    description: `
        • Intégration du design.
        • Création d'une Landin Page pour la société. 
        • Création du Back-end en Symphony. 
        • Participation a la création du front-end avec le framework Vue.Js.`,
  },
];

const Education = [
  {
    title: 'Février 2020 — Août 2020',
    subtitle: 'Moscou',
    entitled: 'DUT, Openclassrooms,',
    description: `
        Formation de 6 mois en tant que Développeur web sur la plateforme française openclassrooms
regroupant 7 projets:
• Création d'un CV sous forme de site internet
• Création d'une landing avec des animations CSS 
• Amélioration des performances SEO d'un site existant 
• Création d'un site e-commerce en Javascript 
• Création du Back-end d'une web app d'avis gastronomique en NodeJS
• Création d'un réseau social ReactJS/NodeJS`,
  },
  {
    title: 'Septembre 2017 — Juin 2020',
    subtitle: 'Moscou',
    description: `Boursier à l'université de technologie de Moscou, faculté ingénieur  en électronique. `,
  },
];

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
    pourcent: 90,
  },
  {
    title: 'SASS',
    pourcent: 90,
  },

  {
    title: 'SQL',
    pourcent: 90,
  },
  {
    title: 'PHP',
    pourcent: 70,
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
    pourcent: 80,
  },

  {
    title: 'JQUERY',
    pourcent: 75,
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

export default function Course({ className }) {
  return (
    <section className={`course ${className}`}>
      <header className="header">
        <h2>Parcours</h2>
        <span>0-2 ans {`d'experience`}</span>
      </header>

      <div className="row">
        <article className="course-item-5">
          <ul>
            <li>
              <h3>
                <span className="underline">Expériences</span>
              </h3>
              {ProfessionnalExp.map((exp, index) => (
                <Timeline
                  Text={{
                    ...exp,
                  }}
                  key={index}
                />
              ))}
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                <span className="underline">Education</span>
              </h3>
              {Education.map((exp, index) => (
                <Timeline
                  Text={{
                    ...exp,
                  }}
                  key={index}
                />
              ))}
            </li>
          </ul>
        </article>
        <article className="course-item-4">
          <ul>
            <li>
              <h3>
                <span className="underline">Language de Programmation</span>
              </h3>
            </li>
            {Language.map((n, index) => (
              <Progress key={index} {...n} />
            ))}
          </ul>
          <ul>
            <li>
              <h3>
                <span className="underline">Framework</span>
              </h3>
              {Framework.map((n, index) => (
                <Progress key={index} {...n} />
              ))}
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                <span className="underline">Base de Données</span>
              </h3>
              {Database.map((n, index) => (
                <Progress key={index} {...n} />
              ))}
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                <span className="underline">Plateforme</span>
              </h3>
              {Plateforme.map((n, index) => (
                <Progress key={index} {...n} />
              ))}
            </li>
          </ul>
        </article>
      </div>

      <a
        href="http://mahamadou-cv.com/images/CV.pdf"
        className="btn-primary btn-medium"
        download
      >
        Telecharger Le Cv
      </a>
    </section>
  );
}

Course.propTypes = {
  className: PropTypes.string,
};
