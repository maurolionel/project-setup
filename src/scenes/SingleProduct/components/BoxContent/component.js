import React from 'react';
import PropTypes from 'prop-types';

const renderContent = (content, index) => (
  <li key={index}>{content}</li>
);

const BoxContent = ({ data }) => (
  <ul>
    {data.map(renderContent)}
  </ul>
);

BoxContent.propTypes = {
  data: PropTypes.array.isRequired
};

export default BoxContent;
