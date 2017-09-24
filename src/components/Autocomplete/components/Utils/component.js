import React from 'react';
import styled from 'styled-components';
import matchSorter from 'match-sorter';
import Paper from '../../../../components/Paper';
import Input from '../../../../components/Input';

export const ControllerButton = styled.button`
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

export const SearchInput = styled(Input)`
  border-bottom-right-radius: ${props => (props.isOpen ? 0 : '3px')};
  border-bottom-left-radius: ${props => (props.isOpen ? 0 : '3px')};
  border-bottom: ${props => (props.isOpen ? '1px solid #e9e9e9' : 0)};
  text-transform: capitalize;
`;

export const Menu = styled(Paper)`
  position: absolute;
  width: 100%;
  padding: 0;
`;

export const Option = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${props => (props.isHighlighted ? props.theme.whiteGray : props.theme.base)};
  color: ${props => (props.isHighlighted || props.isSelected ? props.theme.primary : 'inherit')};
  font-weight: ${props => (props.isSelected ? '700' : '400')};
  text-transform: capitalize;
  cursor: pointer;
`;

export function ArrowIcon({ isOpen }) {
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

export function XIcon() {
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

export function advancedFilter(theItems, value) {
  return value
    ? matchSorter(
      theItems,
      value,
      { keys: ['name'] }
    )
    : theItems;
}
