import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class Explorer extends PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.search;
    if (value) this.props.onSubmit(value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input name="search" type="search" placeholder="Buscar..." />
      </form>
    );
  }
}

Explorer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Explorer;
