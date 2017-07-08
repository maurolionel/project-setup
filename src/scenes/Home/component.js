import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ username }) => <h1>Hi, {username}</h1>;

Home.propTypes = {
  username: PropTypes.string.isRequired
};

export default Home;
