import React from 'react'
import styled from 'styled-components'

import { COLORS, SIZES } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES.IconInput[size]

  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIconWrapper style={{ '--size': `${styles.iconSize}px` }}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </InputIconWrapper>
      <Input
        type='text'
        placeholder={placeholder}
        style={{
          '--width': `${width}px`,
          '--height': `${styles.height / 16}rem`,
          '--border-thickness': `${styles.borderThickness}px`,
          '--font-size': `${styles.fontSize / 16}rem`
        }}
      ></Input>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;

  color: ${COLORS.gray700};
`

const InputIconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;

  height: var(--size);
  margin: auto;
`

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
