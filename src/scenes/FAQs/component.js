import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../components/Title';
import Collapsible from '../../components/Collapsible';

const FAQs = ({ faqs }) => (
  <div>
    <Title>Preguntas Frecuentes</Title>
    {!faqs.length
      ? faqs.map(faq => <Collapsible key={faq.id} title={faq.question} content={faq.answer} />)
      : <p>No hay preguntas frecuentes.</p>
    }
  </div>
);

FAQs.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object)
};

FAQs.defaultProps = {
  faqs: []
};

export default FAQs;
