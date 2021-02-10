import React from 'react'

import ErrorBoundary from '../ErrorHandler/ErrorBoundary'
import Map from '../Map/Map'
import Mevo from '../Mevo/Mevo'
import ScrollToTop from '../UI/ScrollToTop/ScrollToTop'

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Mevo />
      <ErrorBoundary>
        <Map />
      </ErrorBoundary>
    </>
  )
}
