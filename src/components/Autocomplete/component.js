import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import List from 'react-virtualized/dist/commonjs/List';
import {
  SearchInput,
  ControllerButton,
  XIcon,
  ArrowIcon,
  Menu,
  Option,
  GuideQuantity,
  advancedFilter
} from './components/Utils';

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
    const { placeholder, withQuantity, onChange } = this.props;
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
                      {!withQuantity
                        ? items[index].name
                        : <span>
                          {items[index].name}
                          <GuideQuantity>
                            {items[index].quantity > 1
                              ? `${items[index].quantity} instructivos`
                              : `${items[index].quantity} instructivo`
                            }
                          </GuideQuantity>
                        </span>
                      }
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
  placeholder: PropTypes.string,
  withQuantity: PropTypes.bool,
  onChange: PropTypes.func
};

Autocomplete.defaultProps = {
  items: [],
  placeholder: 'Buscar...',
  withQuantity: false,
  onChange: null
};

export default Autocomplete;
