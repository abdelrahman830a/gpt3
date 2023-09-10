import React from 'react'
import './App.css'
import './index.css'

import { Footer, Header, Blog, Features, ABC, Gpt3 } from './containers'
import {  Brand, Call,  Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Gpt3 />
      <Features />
      <ABC />
      <Call />
      <Blog />
      <Footer />
    </div>
  )
}

export default App