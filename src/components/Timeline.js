import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ Text }) {
  const description = Text.description.split(`•`)[0];
  const list = Text.description.split(`•`).slice(1);
  return (
    <section className="timeline">
      <header>
        <h4>
          <strong>{Text.title}</strong>
          <br />
          <span>{Text.subtitle}</span>
        </h4>
      </header>
      <div className="timeline-content">
        <h4>{Text.entitled}</h4>
        {description.length > 0 ? <p>{description}</p> : null}
        <ul>
          {list.map((elt, index) => (
            <li key={index}>
              <span>{elt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Timeline.propTypes = {
  Text: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    entitled: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Timeline;
