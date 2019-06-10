import React from "react";

class Delivery extends React.Component {
    render() {
        return(
            <div className="monthly-statistics-inner">
                <div className="delivery-info-wraapper">
                    <span>1357</span>
                    <span>đang giao</span>
                </div>
                <div className="delivery-chart">
                    <div className="delivery-chart-info">
                        <span>Tháng Một</span>
                        <span>1058</span>
                        <div className="chart january-chart"></div>
                    </div>
                    <div className="delivery-chart-info">
                        <span>Tháng Hai</span>
                        <span>726</span>
                        <div className="chart february-chart"></div>
                    </div>
                    <div className="delivery-chart-info">
                        <span>Tháng Ba</span>
                        <span>1417</span>
                        <div className="chart march-chart"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Delivery;