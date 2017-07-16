import React from 'react';
import PropTypes from 'prop-types';
import AdditionalInfo from '../AdditionalInfo';

const renderContent = (content, index) => (
  <li key={index}>{content}</li>
);

const BoxContent = ({ data }) => (
  <AdditionalInfo title="Contenido de la caja">
    <ul>
      {data.map(renderContent)}
    </ul>
  </AdditionalInfo>
);

BoxContent.propTypes = {
  data: PropTypes.array.isRequired
};

export default BoxContent;
