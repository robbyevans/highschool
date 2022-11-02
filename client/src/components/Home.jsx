import React from 'react'
import Colorchart from './Colorchart'
import Barchart from './Barchart'
import Piechart from './Piecharts'
import Respiechart from './Respiechart'
import Linegraph from './Linegraph'
import Newbargraph from './Newbargraph'

function Home() {
  return (
    <div>
      <h1>Analytics</h1>
      <Colorchart/>
      <Barchart/>
      <Piechart/>
      <Respiechart/>
      <Linegraph/>
      <Newbargraph/>
   

    </div>
  )
}

export default Home