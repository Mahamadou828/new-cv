import React from 'react';
import PropTypes from 'prop-types';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import VerifyEmail from '../function';

const Item = [
  {
    Icon: <LocationOnIcon />,
    text: 'Moscou',
  },
  {
    Icon: <PhoneIcon />,
    text: '+79206827443',
  },
  {
    Icon: <EmailIcon />,
    text: 'opmadou@gmail.com',
  },
  {
    Icon: <CheckCircleOutlineIcon />,
    text: 'Actuellement disponible',
  },
];

export default function Contact({ className }) {
  let name, email, subject, question;

  const [error, setError] = React.useState({
    email: '',
    name: '',
    subject: '',
    question: '',
    general: '',
  });

  const sendMessage = () => {
    const newError = { ...error };
    try {
      if (name.length <= 0) {
        newError.name = 'Nom Requis';
      } else if (subject.length <= 0) {
        newError.subject = 'Sujet Requis';
      } else if (question.length <= 0) {
        newError.question = 'Une petite question ?)';
      } else {
        const message = {
          firstname: 'not required',
          name,
          email,
          phone: 'not required',
          message: subject,
        };

        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'http://mahamadou-cv.com/php/contact.php');
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log('Fait');
          } else {
            console.log(this.status);
          }
        };
        xhttp.send(JSON.stringify(message));
      }
    } catch (error) {
      newError.general = 'Veuillez remplir le formulaire';
    }

    setError({ ...newError });
  };

  return (
    <section className={`contact ${className}`}>
      <header className="header">
        <h2>Contact</h2>
      </header>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="180"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=11%20ya%20parkovaya%20ulitsa&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe>
          <a href="https://torrent9-site.org"></a>
        </div>
      </div>

      <div className="row">
        {Item.map((elt, index) => RenderItem({ elt, key: index }))}
      </div>

      <form action="" className="contact-form">
        <h3>
          <span className="underline">Comment Puis-je vous aidez</span>
        </h3>
        <input
          type="email"
          placeholder="Votre email"
          onChange={(e) => {
            email = e.target.value;
            if (!VerifyEmail(email)) {
              setError({
                ...error,
                email,
              });
            }
          }}
        />
        <input
          type="text"
          placeholder="Votre Nom Complet"
          onChange={(e) => {
            name = e.target.value;
          }}
        />
        <input
          type="text"
          placeholder="Le Sujet"
          onChange={(e) => {
            subject = e.target.value;
          }}
        />
        <textarea
          placeholder="Votre Question"
          id=""
          cols="30"
          rows="7"
          onChange={(e) => {
            question = e.target.value;
          }}
        ></textarea>
        {error.general.length > 0 ? (
          <p className="error">Veuillez Remplir Le Formulaire</p>
        ) : null}
        <button
          className="btn-primary btn-medium"
          onClick={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

function RenderItem({ elt, key }) {
  const { Icon, text } = elt;
  return (
    <div className="contact-info" key={key}>
      {Icon}
      <h4>{text}</h4>
    </div>
  );
}

RenderItem.propTypes = {
  elt: PropTypes.shape({
    Icon: PropTypes.object,
    text: PropTypes.string.isRequired,
  }),
  key: PropTypes.string,
};

Contact.propTypes = {
  className: PropTypes.string.isRequired,
};
