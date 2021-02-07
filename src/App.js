import React from 'react'

import Map from './components/Map/Map'
import Mevo from './components/Mevo/Mevo'
import Layout from './containers/Layout/Layout'

const App = () => {
  return (
    <Layout>
      <Mevo />
      <Map />
    </Layout>
    )
}

export default App;
