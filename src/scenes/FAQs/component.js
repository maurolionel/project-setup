import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../components/Title';
import Collapsible from '../../components/Collapsible';

const faqs = [
  {
    id: 1,
    question: '¿Qué es un sistema continuo o CISS?',
    answer: 'Un sistema continuo o CISS (Continuos Ink Suplier System) es un bla bla bla ble ble ble...'
  },
  {
    id: 2,
    question: '¿Qué es un sistema continuo o CISS?',
    answer: 'Un sistema continuo o CISS (Continuos Ink Suplier System) es un bla bla bla ble ble ble...'
  }
];

const FAQs = () => (
  <div>
    <Title>Preguntas Frecuentes</Title>
    {faqs.map(faq =>
      <Collapsible key={faq.id} title={faq.question} content={faq.answer} />
    )}
  </div>
);

export default FAQs;
