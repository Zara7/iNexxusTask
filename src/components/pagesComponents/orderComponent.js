import React from "react";

class Order extends React.Component {
    render() {
        return(
            <div className="monthly-statistics-inner">
                <div className="state-headline">
                    <span className="state-title">tháng 1</span>
                    <span className="arrow-wrapper">
                        <i className="material-icons">chevron_left</i>
                        <i className="material-icons">chevron_right</i>
                    </span>
                </div>
                <div className="statistic-info-wrapper">
                    <div className="number">
                        <div>2936 </div>
                        <div>Đơn hàng mỗi tháng </div>
                    </div>
                    <div className="percent">
                        +24%
                    </div>
                </div>
                <div className="chart-img"></div>
            </div>
        );
    }
}

export default Order;