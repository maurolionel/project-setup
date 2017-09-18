import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Paper from '../../../../components/Paper';
import Input from '../../../../components/Input';

const Autocomplete = ({ items, onChange }) => (
  <Downshift onChange={onChange}>
    {({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      selectedItem,
      highlightedIndex
    }) => (
      <div>
        <Input {...getInputProps({ placeholder: 'Seleccione la marca' })} />
        {isOpen ? (
          <Paper withoutChangingStateStyle>
            {items
              .filter(
                i =>
                  !inputValue ||
                  i.toLowerCase().includes(inputValue.toLowerCase()),
              )
              .map((item, index) => (
                <div
                  {...getItemProps({ item })}
                  key={item}
                  style={{
                    color: highlightedIndex === index ? 'blue' : '#333',
                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                  }}
                >
                  {item}
                </div>
              ))}
          </Paper>
        ) : null}
      </div>
    )}
  </Downshift>
);

Autocomplete.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

Autocomplete.defaultProps = {
  items: []
};

export default Autocomplete;
