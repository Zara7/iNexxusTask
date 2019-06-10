import React from "react";

import Order from '../pagesComponents/orderComponent';
import Delivery from '../pagesComponents/deliveryComponent';
import Application from '../pagesComponents/applicationsComponent';
import StateChart from '../pagesComponents/stateChartComponent';
import StateGrid from '../pagesComponents/gridComponent';

class Statistics extends React.Component {
    render() {
        return(
            <content className="statistics-container">
                <div className="monthly-statistics-wrapper">
                   <Order />
                   <Delivery />
                   <Application />
                </div>
                <div className="chart-container">
                    <StateChart />
                </div>
            
                <StateGrid />
            
            </content>
        );
    }
}

export default Statistics;