import React from 'react'
import Highcharts from 'highcharts'
import drilldown from "highcharts/modules/drilldown"
import HighchartsReact from 'highcharts-react-official'

const styles = {
  height: '10%',
  weight: '15%',
  color: 'red',
  background: 'dark',
  display: 'flex'
};

const options = {

  title: {
    text: '2020 год'
  },
  xAxis: {
    type: 'category'
  },
  legend: {
    enable: false
  },
  series: [
    {
      type: 'column',
      name: 'Население',
      colorByPoint: true,
      data: [
        {
          name: 'Tokyo',
          y: 100

        },
        {
          name: 'Kiev',
          y: 200

        },
        {
          name: 'Moscow',
          y: 120
        }



      ]
    }
  ]
};

const option = {

  title: {
    text: '2021 год'
  },
  xAxis: {
    type: 'category'
  },
  legend: {
    enable: false
  },
  series: [
    {
      type: 'column',
      name: 'Население',
      colorByPoint: true,
      data: [
        {
          name: 'Tokyo',
          y: 100

        },
        {
          name: 'Kiev',
          y: 200

        },
        {
          name: 'Moscow',
          y: 120
        }



      ]
    }
  ]
};

let Graph = () => {
  return (
    <div style={styles}>
      <h1>TITLE</h1>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={option} />
      </div>
    </div>
  );
}

export default Graph;