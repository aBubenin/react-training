import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export default class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
           error: null,
           isLoaded: false,
           items: {},
           value: 0,
           options: {
            series: [
              {
                name: 'Курс доллара',
                data: [10,15,20,32]
              }
            ]
          }

        };
       
    }
    

    componentDidMount() {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then( res => res.json())
        .then (
            (result) => {
                this.setState({
                    isLoaded:true,
                    items: result.Valute,
                    value: result.Valute.USD.Value
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    



    render() {
        const{error, isLoaded, items} = this.state;
        if(error) {
            return <p>Error {error.message}</p>
        } else if(!isLoaded){
            return <p>Loading...</p>
        } else {
            return (
              <>
                <h1>{this.state.value}</h1>
                <HighchartsReact  highcharts={Highcharts} options={this.state.options} />
            </>
            )
        }
    }
}
