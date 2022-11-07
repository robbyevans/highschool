import React from 'react'
import Colorchart from './Colorchart'
import Barchart from './Barchart'
import Piechart from './Piecharts'
import Respiechart from './Respiechart'
import Linegraph from './Linegraph'
import Newbargraph from './Newbargraph'
import NewPieChart from './NewPieChart'
import ActivePieChart from './ActivePieChart'

function Home() {
  return (
    <div>
      <h1>Analytics</h1>
      <div className='piechart-wrap'>
        <Colorchart/>
        <Piechart/>
        
      </div>
      {/* <h1>Analytics</h1>
      <div className="charts">
        <div className="secondary-chart"><Colorchart/></div>
      </div> */}
      <Barchart/>
      <Piechart/>
      <Respiechart/>
      <Linegraph/>
      <Newbargraph/>
      <div className="new-chart">
        <div className="new-primary-chart"><NewPieChart/></div>
        </div>
        <ActivePieChart/>
   

    </div>
  )
}

export default Home