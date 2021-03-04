import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import merge from 'lodash.merge'

import { defaultTheme } from '../theme'
import type { Theme, WithTheme, ThemeModes } from '../types'

const WRAPPER_HEIGHT = 20
const WRAPPER_WIDTH = 44
const INDICATOR_DIMENTIONS = WRAPPER_HEIGHT + 6
const INDICATOR_TRANSLATE_X = WRAPPER_WIDTH - INDICATOR_DIMENTIONS

export const ToggleWrapper = styled.div`
  width: ${WRAPPER_WIDTH}px;
  height: ${WRAPPER_HEIGHT}px;
  position: relative;
`

export const Input = styled.input`
  display: none;
`

type LabelProps = WithTheme & {
  checked: boolean
  color: ThemeModes
}

export const Label = styled.label<LabelProps>(({ theme, checked, color }) => {
  const { palette }: Theme = merge(defaultTheme, theme)
  const usedColor = {
    primary: palette.primary,
    secondary: palette.secondary,
    success: palette.success,
    danger: palette.danger,
  }[color]
  return css`
    width: 100%;
    height: 100%;
    background-color: ${palette.grey[300]};
    position: absolute;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    transition: 0.2s all linear;
    ${checked &&
    css`
      background-color: ${usedColor};
      & > span {
        transform: translateX(${INDICATOR_TRANSLATE_X}px);
        background-color: ${palette.white};
      }
    `}
  `
})

export const Indicator = styled.span<WithTheme>(({ theme }) => {
  const { palette }: Theme = merge(defaultTheme, theme)
  return css`
    background-color: ${palette.grey[100]};
    width: ${INDICATOR_DIMENTIONS}px;
    height: ${INDICATOR_DIMENTIONS}px;
    position: absolute;
    border-radius: 50%;
    transition: 0.2s all linear;
    box-shadow: 0px 0px 8px 0px ${rgba(palette.grey[500], 0.6)};
  `
})
