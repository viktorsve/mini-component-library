/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS, SIZES } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const ProgressBar = ({ value, size }) => {
  const styles = SIZES.ProgressBar[size]
  let Component

  if (size === 'large') Component = LargeProgressBar
  else Component = ProgressBarBase

  return (
    <ProgressBarWrapper
      style={styles}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Component style={styles} value={value} min='0' max='100'></Component>
    </ProgressBarWrapper>
  )
}

const ProgressBarWrapper = styled.div`
  overflow: hidden;
  width: 370px;
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  background: ${COLORS.transparentGray15};
`

const ProgressBarBase = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  display: block;
  height: 100%;
  width: 100%;

  ::-webkit-progress-bar {
    background: transparent;
  }

  ::-webkit-progress-value {
    background: ${COLORS.primary};
    transition: width 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  }
`

const LargeProgressBar = styled(ProgressBarBase)`
  padding: 4px;

  ::-webkit-progress-value {
    border-radius: 4px 0px 0px 4px;
  }

  &[value='100']::-webkit-progress-value {
    border-radius: 4px;
  }
`

export default ProgressBar
