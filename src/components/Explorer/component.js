import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

class Explorer extends PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event.target.search.value);
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
