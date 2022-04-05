import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <SelectWrapper>
      <SelectBase value={value} onChange={onChange}>
        {children}
      </SelectBase>
      <SelectText>{displayedValue}</SelectText>
      <SelectIcon style={{ '--size': '24px' }}>
        <Icon id='chevron-down' strokeWidth={1} size={24} />
      </SelectIcon>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  position: relative;

  width: max-content;
`

const SelectBase = styled.select`
  position: absolute;

  opacity: 0;
  width: 100%;
  height: 100%;

  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
`

const SelectText = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  padding-right: 52px;
  border-radius: 8px;

  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${SelectBase}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectBase}:hover + & {
    color: ${COLORS.black};
  }
`

const SelectIcon = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;

  width: var(--size);
  height: var(--size);
  margin: auto;

  pointer-events: none;
`

export default Select
