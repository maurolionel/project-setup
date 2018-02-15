import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import { replaceSpaceWithMiddleDash } from '../../services/utils';

class Explorer extends PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = replaceSpaceWithMiddleDash(event.target.search.value.trim());
    if (trimmedValue) {
      this.props.onSubmit(trimmedValue);
      event.target.search.value = '';
    }
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
