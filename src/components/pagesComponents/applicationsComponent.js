import React from "react";

class Application extends React.Component {
    render() {
        return(
            <div className="monthly-statistics-inner">
                <div className="state-headline app-state-headline">
                    <i className="material-icons">chevron_left</i>
                    <span className="state-title">tháng 01 2019</span>
                    <i className="material-icons">chevron_right</i>
                </div>
                <div className="app-chart-img"></div>
                <div className="app-chart-txt"><span>50%</span> đơn đã chốt thành công </div>
            </div>
        );
    }
}

export default Application;