import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function Contact({ className }) {
  return (
    <section className={`${className} contact`}>
      <header className="global-page_title text-center space-magTop">
        <h2>Contact</h2>
      </header>

      <div className="display-tablet container display-responsive_space display-center">
        <section className="display-column notscroll contact-elt">
          <header className="global-page_title underline text-center ">
            <h3>Me contacter</h3>
          </header>
          <p>
            Pour plus {`d'informations`} sur {`l'un`} de nos services ou pour
            discuter de la manière dont nous pouvons vous aider, veuillez nous
            contacter en utilisant le formulaire ci-contre. Ou vous pouvez
            appeler et suivre nos réseaux sociaux.
          </p>
          <p className="display-column">
            <strong>
              <u>Phone:</u>
            </strong>
            <span>(+7)9206827443</span>
          </p>
          <p className="display-column">
            <strong>
              <u>Email:</u>
            </strong>
            <span>opmadou@gmail.com</span>
          </p>
          <p className="display-column">
            <strong>
              <u>Follow:</u>
            </strong>
            <span className="display-row display-responsive_space follow">
              <a
                className="contact-link"
                href="https://linkedin.com/in/mahamadou-samaké"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="contact-link"
                href="https://www.malt.fr/profile/mahamadousamake#profileRecommendations"
              >
                <i className="fab fa-mastodon"></i>
              </a>
              <a
                className="contact-link"
                href="https://github.com/Mahamadou828"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </p>
        </section>

        <form className="display-column contact-form">
          <input type="email" placeholder="Votre email" />
          <input type="text" placeholder="Votre Nom Complet" />
          <textarea
            placeholder="Votre Question"
            id=""
            cols="30"
            rows="7"
          ></textarea>
          <Button className="btn btn-primary btn-medium">Envoyer</Button>
        </form>
      </div>
    </section>
  );
}

Contact.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Contact;
