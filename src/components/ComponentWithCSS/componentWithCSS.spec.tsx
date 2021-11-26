import React from 'react'
import { render, screen } from '@testing-library/react'
import { ComponentWithCSS } from '.'

it('teste', () => {
	render(<ComponentWithCSS />)
  const element = screen.getByRole('heading', { name: /component with css/i })
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('cwcss-wrapper')
})