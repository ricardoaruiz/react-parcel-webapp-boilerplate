import React from 'react'
import { render, screen } from '@testing-library/react'
import { ComponentWithCSSModule } from '.'

it('teste', () => {
	const { container } = render(<ComponentWithCSSModule />)
  expect(container.parentElement).toMatchSnapshot()
  
})