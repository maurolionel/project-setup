import React from 'react';
import PropTypes from 'prop-types';

const renderDetail = (aDetail, index) => (
  <li key={index}>{aDetail}</li>
);

const TechnicalDetails = ({ data }) => (
  <ul>
    {data.map(renderDetail)}
  </ul>
);

TechnicalDetails.propTypes = {
  data: PropTypes.array.isRequired
};

export default TechnicalDetails;
