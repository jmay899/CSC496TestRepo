import * as React from 'react'
import Layout from '../components/layout'
import { Chart, Layer, Labels, Ticks, Bars, Transform } from "rumble-charts";

const series = [
  { name: "San Francisco", data: [1959], color: "rebeccapurple" },
  { name: "New York", data: [1483]},
  { name: "Los Angeles", data: [1554]},
  { name: "Seattle", data: [1744]},
  { name: "Chicago", data: [1134]},
  { name: "Austin", data: [1334]}
];

const ChartPage = () => {
  return (
    <Layout pageTitle="Rent For U.S. Cities: ">
      <Chart width={1000} height={500} viewBox="80 40 1000 500" series={series} minY={0} maxY={2000}>
      <Layer width="70%" height="70%" position="middle center">
        <Transform method="transpose">
          <Ticks 
            axis="y"
            lineLength="100%"
            lineVisible={true}
            lineStyle={{ stroke: "lightgray" }}
            labelStyle={{
              textAnchor: "end",
              dominantBaseline: "middle",
              fill: "#484848"
            }}
            labelAttributes={{ x: -5}}
          />
		  
          <Ticks
            ticks={{ minDistance: 1 }}
            axis="x"
            label={({ index, props }) => series[index].name}
            labelStyle={{
              textAnchor: "middle",
              dominantBaseline: "text-before-edge",
              fill: "#484848"
            }}
            labelAttributes={{ y: 5 }}
          />
		  
          <Bars
            barAttributes={({ seriesIndex }) => ({
              fill: series[seriesIndex].color,
			  
			  onMouseMove : function onMouseMove(e) {
				return e.target.style.fillOpacity=1 
			  },
			  
			  onMouseLeave : function onMouseLeave(e) {
				return e.target.style.fillOpacity=0.6
			  }
            })}
            innerPadding="4.5%"
            groupPadding="3%"
			
            barStyle={({ seriesIndex }) => ({
              fillOpacity: 0.6,
			  transition: "250ms"
            })}
          />
		  
		  <Labels 
		    label={({ point }) => "$"+point.y}
			labelAttributes={({ seriesIndex }) => ({
			  y: -10,
			  x: -28,
              fill: series.textColor,
			  fillOpacity: 0.8,
			  fontSize: 20,
			  
			  onMouseMove : function onMouseMove(e) {
				return e.target.style.fillOpacity=1 
			  },
			  
			  onMouseLeave : function onMouseLeave(e) {
				return e.target.style.fillOpacity=0.8
			  }
            })}
		  />
        </Transform>
      </Layer>
    </Chart>
	<h5>Chart displays median gross rent in USD for cities in the United States in 2019.</h5>
	<h5>Data obtained from city-data.com</h5>
    </Layout>
  )
}
export default ChartPage
