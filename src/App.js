import React from 'react'
import Form from './componentes/Form'
import Informative from './componentes/Informative'
import './css/App.css'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
  <div>
    <Helmet>
    <link rel="icon" href={require('./images/heart.jpg')} />
      <title>Formulario</title>
        </Helmet>
          <Form/>
          <Informative/>
              </div>
  )
}

export default App
