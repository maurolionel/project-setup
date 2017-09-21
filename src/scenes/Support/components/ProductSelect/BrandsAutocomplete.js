import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Paper from '../../../../components/Paper';
import Input from '../../../../components/Input';

const ResultsWrapper = styled(Paper)`
  width: 100%;
  padding: 0;
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

const Result = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${props => (props.isHighlighted ? props.theme.whiteGray : props.theme.base)};
  color: ${props => (props.isHighlighted || props.isSelected ? props.theme.primary : 'inherit')};
  font-weight: ${props => (props.isSelected ? '700' : '400')};
  text-transform: capitalize;
  cursor: pointer;
`;

const Autocomplete = ({ items, placeholder, onChange }) => (
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
        <Input style={{ textTransform: 'capitalize' }} {...getInputProps({ placeholder })} />
        {isOpen
          ? (
            <ResultsWrapper withoutChangingStateStyle>
              {items
                .filter(i => !inputValue || i.toLowerCase().includes(inputValue.toLowerCase()))
                .map((item, index) => (
                  <Result
                    {...getItemProps({ item })}
                    key={item}
                    isHighlighted={highlightedIndex === index}
                    isSelected={selectedItem === item}
                  >
                    {item}
                  </Result>
                ))
              }
            </ResultsWrapper>
          )
          : null
        }
      </div>
    )}
  </Downshift>
);

Autocomplete.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Autocomplete.defaultProps = {
  items: [],
  placeholder: ''
};

export default Autocomplete;
