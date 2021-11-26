import React from 'react'

import { Button } from './components'

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

const App = () => {
  return (
    <div>
      App  
      <Button>Clique aqui!</Button>
      <img src={reactLogoPng} alt="react logo png" style={{ width: '40px' }}/>
      <img src={reactLogoJpg} alt="react logo jpg" style={{ width: '40px' }}/>
      <img src={reactLogoJpeg.toString()} alt="react logo jpeg" style={{ width: '40px' }}/>
      <img src={reactLogoGif.toString()} alt="react logo gif" style={{ width: '40px' }}/>
    </div>
  )
}

export default App