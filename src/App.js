import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Questions from './components/Questions/Questions'
import Layout from './containers/Layout/Layout'

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/answers' component={Questions} />
    </Layout>
  )
}

export default App;
