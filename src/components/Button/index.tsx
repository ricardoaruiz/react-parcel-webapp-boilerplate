import React from 'react'

import { ButtonProps } from './types'

import * as S from './styles'

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.Wrapper type="button" { ...props }>
      {children}
    </S.Wrapper>
  )
}