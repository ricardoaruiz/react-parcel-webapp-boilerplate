import styled from 'styled-components'
import { darken } from 'polished'

const buttonColor = '#7159c1'

export const Wrapper = styled.button`
  background: ${buttonColor};
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1,buttonColor)};   
  }
  &:active {
    background: ${darken(0.2,buttonColor)};   
  }
`