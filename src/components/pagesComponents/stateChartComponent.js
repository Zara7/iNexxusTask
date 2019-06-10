import React from "react";
import { Line } from 'react-chartjs-2';

class StateChart extends React.Component {
    constructor() {
        super();
        this.state = {
            items : [],
        };
    }


    componentDidMount() {
            fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Cristiano_Ronaldo/daily/20190101/20190606')
              .then(response => response.json())
              .then(data => 
                    this.setState({ items: data.items })
                );
    }

    render() {
        const items  = this.state.items;
        let dates = items.slice(-10, -1).map(item => {
            let mm = item.timestamp.slice(4,6);
            let dd = item.timestamp.slice(6,8);
            return `${dd}.${mm}`;
        });
        let views = items.slice(-10, -1).map(item =>item.views);
        
        let data = {
                labels: dates,
                datasets: [
                    {
                      backgroundColor: "rgba(62, 124, 188, 0.75)",
                      data: views
                    }
                ]
            }
        return(
            <div className="chart-inner-container">
    
            <Line 
                data={data}
            />
            </div>
        );
    }
}
export default StateChart;