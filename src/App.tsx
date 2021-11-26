import React from 'react'

import { Button, ComponentWithCSS, ComponentWithSCSS, ComponentWithCSSModule } from './components'

import reactLogoPng from './assets/images/react-logo.png'
import reactLogoJpg from './assets/images/react-logo.jpg'
const reactLogoJpeg = new URL(
  './assets/images/react-logo.jpeg?as=webp&width=40',
  import.meta.url
);
const reactLogoGif = new URL(
  './assets/images/react-logo.gif?as=webp&width=40',
  import.meta.url
);
import LogoReact from './assets/images/react-logo.svg'

const App = () => {
  return (
    <div>
      
      {/* Imagens */}
      <div style={{ margin: '40px 0' }}>
        <img src={reactLogoPng} alt="react logo png" style={{ width: '40px' }}/>
        <img src={reactLogoJpg} alt="react logo jpg" style={{ width: '40px' }}/>
        <img src={reactLogoJpeg.toString()} alt="react logo jpeg" style={{ width: '40px' }}/>
        <img src={reactLogoGif.toString()} alt="react logo gif" style={{ width: '40px' }}/>
        <div style={{ display: "inline-block", width: '40px' }}>
          <LogoReact />
        </div>
      </div>

      <Button>Clique aqui!</Button>
      <ComponentWithCSS />
      <ComponentWithSCSS />
      <ComponentWithCSSModule />
    </div>
  )
}

export default App