import React from 'react';
import PropTypes from 'prop-types';

const CertificatsOpen = [
  {
    title: 'Développeur Web, DUT',
    description:
      "Formation de six mois sur la plateforme Openclassrooms, avec l'accompagnement d'un le parcours consistait a faire valider 7 projets web. Vous trouverez plus de details dans la section Education de la page Parcours.",
    link: 'http://mahamadou-cv.com/images/Certificats/Diplome%20Provisoire.pdf',
  },
  {
    title: 'Concevez votre site web avec PHP et MySQL, Certificat',
    description:
      "Formation qui consistait à acquerir toutes les connaissances de base pour la création d'un site internet dynamique avec PHP",
    link: 'http://mahamadou-cv.com/images/Certificats/PHP_MYSQL.pdf',
  },
  {
    title: 'Des applications ultra-rapides avec Node.js, Certificat',
    description:
      "Introduction à la création de site internet en Node.js. La formations avait comme fil rouge la création d'un chat avec express et socket.io",
    link: 'http://mahamadou-cv.com/images/Certificats/NODEJS.pdf',
  },
  {
    title: 'Apprenez à créer votre site web avec HTML5 et CSS3, Certificat',
    description:
      "Introduction au language d'instruction HTML5, CSS3. Création de landing page enfin d'acquérir les bases du developpement web.",
    link: 'http://mahamadou-cv.com/images/Certificats/HTML-CSS.pdf',
  },
  {
    title: 'Utilisez des API REST dans vos projets web, Certificats',
    description:
      "Introduction à la notion d'API REST. De requete Get et Post. Comment créer et utiliser des API deja disponible ( tel que l'api instagramm ). ",
    link: 'http://mahamadou-cv.com/images/Certificats/API_REST.pdf',
  },
  {
    title: 'Écrivez du JavaScript pour le web, DUT',
    description:
      'Introduction au language de programmation Javascript. Notion de DOM, ajax, asynchrone etc enfin de créer des sites web dynamique',
    link: 'http://mahamadou-cv.com/images/Certificats/JAVASCRIPT_WEB.pdf',
  },
  {
    title: 'Maîtrisez les bases de données NoSQL, Certificats',
    description:
      "Introduction aux bases de données non relationnelle tel que MongoDB. La formation permet d'acquerir des notions de bases quand a la gestion, la mise en place et le deploiement d'une base donnée MongoDb",
    link: 'http://mahamadou-cv.com/images/Certificats/NoSql.pdf',
  },
  {
    title: 'Réalisez une application web avec React.js, Certificats',
    description:
      'Formation au Framework React.Js afin de pouvoir developper des SPA et des Web App plus performant. Des notions de base tels que le State, Props, Test Unitaire ont été aborder tout au long de cette formation afin de pouvoir créer des applications selon le Best Practices du milieu',
    link: 'http://mahamadou-cv.com/images/Certificats/React.pdf',
  },
  {
    title: 'Développez une application mobile React Native, Certificats',
    description:
      "Formation sur le framewwork de developpement d'application Cross Plateforme React-Native. Mise en place d'une CRNA et d'une application utilisant les composants du devices. Le fil rouge de la formation était une application pour fan de film, utilisant l'Api 'The Movie Database' afin de recupérer les informations nécéssaire.",
    link: 'http://mahamadou-cv.com/images/Certificats/React Native.pdf',
  },
  {
    title: 'Organisez votre application avec la logique Redux, Certificats',
    description:
      "Introduction au framework de state managment Redux afin de résoudre les problemes fréquemment rencontré dans les web app React. Introduction as dataflow unidirectionnel de Redux (actions creators, actions, reducers etc ...) ainsi qu'au test unitaires d'applications Redux",
    link: 'http://mahamadou-cv.com/images/Certificats/Redux.pdf',
  },
  {
    title: 'Simplifiez-vous le CSS avec Sass, Certificats',
    description:
      "Formation sur le préprocesseur CSS Sass afin d'alleger le developpement des feuilles de styles css grace a une synthaxe proche d'un language de programmation",
    link: 'http://mahamadou-cv.com/images/Certificats/SASS.pdf',
  },
  {
    title:
      'Optimisez le référencement de votre site (SEO) en améliorant ses performances techniques, Certificats',
    description:
      "Introduction aux Best Practices du SEO afin d'ameliorer le referencement d'un site internet",
    link: 'http://mahamadou-cv.com/images/Certificats/SEO.pdf',
  },
  {
    title: 'Passez au Full stack avec Node.js, Express et MongoDB, Certificats',
    description:
      "Formation sur la notion de FullStack en Javascript, creation d'un CRUD en Javascript, avec authentification grace a bcrypt et jwt. La formation afi pour fil rouge la création du Back-end d'un site e-commerce. ",
    link: 'http://mahamadou-cv.com/images/Certificats/Fullstack.pdf',
  },
];

const Udemy = [
  {
    title: 'React Avancée, Certificat',
    description:
      'Formation destinée a approfondir ses connaissances du framework React.JS',
    link: 'http://mahamadou-cv.com/images/Certificats/React-AVANCER.jpg',
  },
  {
    title: 'Formation Complète Développeur web',
    description:
      "Formation de 38 heures afin d'aaprendre les bases du developpement web. PHP, Javascript sont les principales notions abordées durant ce parcours",
    link: 'http://mahamadou-cv.com/images/Certificats/formationcomplete.jpg',
  },
];

function Certificat({ className }) {
  return (
    <section className={`certificat ${className}`}>
      <header className="header">
        <h2>Certificats</h2>
        <span>Trouvez plus linkedin ou malt</span>
      </header>
      <ul>
        <li>
          <h3>
            <span className="underline">Openclassrooms</span>
          </h3>
          <ul>
            {CertificatsOpen.map((item, index) => (
              <li className="certificat-item" key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a className="btn-primary btn-medium" href={item.link}>
                  Voir le diplome
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h3>
            <span className="underline">Udemy</span>
          </h3>
          <ul>
            {Udemy.map((item, index) => (
              <li className="certificat-item" key={index}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a className="btn-primary btn-medium" href={item.link}>
                  Voir le diplome
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}

Certificat.propTypes = {
  className: PropTypes.string,
};

export default Certificat;
