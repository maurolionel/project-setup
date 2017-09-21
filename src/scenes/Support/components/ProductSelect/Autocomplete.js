import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import List from 'react-virtualized/dist/commonjs/List';
import matchSorter from 'match-sorter';
import Paper from '../../../../components/Paper';
import Input from '../../../../components/Input';

const ControllerButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 47px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function ArrowIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? 'rotate(180)' : null}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  );
}

const SearchInput = styled(Input)`
  border-bottom-right-radius: ${props => (props.isOpen ? 0 : '3px')};
  border-bottom-left-radius: ${props => (props.isOpen ? 0 : '3px')};
  border-bottom: ${props => (props.isOpen ? '1px solid #e9e9e9' : 0)};
`;

const Menu = styled(Paper)`
  width: 100%;
  padding: 0;
`;

const Option = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${props => (props.isHighlighted ? props.theme.whiteGray : props.theme.base)};
  color: ${props => (props.isHighlighted || props.isSelected ? props.theme.primary : 'inherit')};
  font-weight: ${props => (props.isSelected ? '700' : '400')};
  text-transform: capitalize;
  cursor: pointer;
`;

function advancedFilter(theItems, value) {
  return value
    ? matchSorter(
      theItems,
      value,
      { keys: ['name'] }
    )
    : theItems;
}

class Autocomplete extends PureComponent {
  state = {
    items: this.props.items,
    inputValue: ''
  }

  handleStateChange = (changes) => {
    if (changes.hasOwnProperty('inputValue')) {
      const { inputValue } = changes;
      this.setState({
        inputValue,
        items: advancedFilter(this.props.items, inputValue)
      });
    }
  }

  render() {
    const { items, inputValue } = this.state;
    const { onChange, placeholder } = this.props;
    return (
      <Downshift
        inputValue={inputValue}
        itemToString={i => (i ? i.name : '')}
        onChange={onChange}
        onStateChange={this.handleStateChange}
        itemCount={items.length}
      >
        {({
          getInputProps,
          getItemProps,
          getButtonProps,
          isOpen,
          selectedItem,
          highlightedIndex,
          clearSelection
        }) => (
          <div>
            <div style={{ position: 'relative' }}>
              <SearchInput {...getInputProps({ isOpen, placeholder })} />
              {selectedItem
                ? <ControllerButton onClick={clearSelection} aria-label="clear selection">
                  <XIcon />
                </ControllerButton>
                : <ControllerButton {...getButtonProps()}>
                  <ArrowIcon isOpen={isOpen} />
                </ControllerButton>
              }
            </div>
            {!isOpen
              ? null
              : <Menu withoutChangingStateStyle>
                <List
                  style={{ width: '100%' }}
                  containerStyle={{ maxWidth: '100%' }}
                  width={300}
                  height={300}
                  rowHeight={37}
                  rowCount={items.length}
                  scrollToIndex={highlightedIndex || 0}
                  rowRenderer={({ key, index, style }) => (
                    <Option
                      key={key}
                      isHighlighted={highlightedIndex === index}
                      isSelected={selectedItem === items[index]}
                      {...getItemProps({ item: items[index], index, style })}
                    >
                      {items[index].name}
                    </Option>
                  )}
                />
              </Menu>
            }
          </div>
        )}
      </Downshift>
    );
  }
}

Autocomplete.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string
};

Autocomplete.defaultProps = {
  items: [],
  placeholder: 'Buscar...'
};

export default Autocomplete;
