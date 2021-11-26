import React from 'react'
import { render, screen } from '@testing-library/react'
import { ComponentWithSCSS } from '.'

it('teste', () => {
	const { container } = render(<ComponentWithSCSS />)
  expect(container.parentElement).toMatchInlineSnapshot(`
<body>
  <div>
    <div
      class="cwscss-wrapper"
    >
      Component With SCSS
    </div>
  </div>
</body>
`)
  
})