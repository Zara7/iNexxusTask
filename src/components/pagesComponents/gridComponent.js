import React from "react";

class StateGrid extends React.Component {
    render() {
        return(
            <div className="state-grid-container">
                <div className="filter-container">
                    <div className="filter-desc-wrapper">
                        <div>Nhân viên đang giao,</div>
                        <div>Theo dõi trạng thái nhân viên giao hàng</div>
                    </div>
                    <div className="fitler-wrapper">
                        <div className="filter-inner">
                            <div className="label">Từ ngày</div>
                            <input type="search" placeholder="01/01/2019"/>
                        </div>
                        <div className="filter-inner">
                            <div className="label">Đến ngày</div>
                            <input type="search" placeholder="22/01/2019"/>
                        </div>
                        <button type="button">Lọc</button>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-inner">
                        <div className="grid-titel">
                            <div>Thông tin nhân viên</div>
                            <div>Phương tiện</div>
                            <div>Giao được</div>
                            <div>Chưa giao</div>
                            <div>Không giao được</div>
                            <div>Khối lượng (kg)</div>
                            <div>Thể tích</div>
                        </div>
                        <div className="uner-info">
                            <div className="user-name">
                                <i className="material-icons">account_box</i>
                                <div className="user-inner">
                                    <div>Nguyễn Hoa</div>    
                                    <div>DRIVERTHUANPV0</div>  
                                </div>
                                  
                            </div>
                            <div className="vehicle">Truck001</div>
                            <div className="delivered">50</div>
                            <div className="not-give">624</div>
                            <div className="not-delivered">15</div>
                            <div className="weight">624</div>
                            <div className="volume">0.8542</div>
                        </div>
                        <div className="uner-info">
                            <div className="user-name">
                                <i className="material-icons">account_box</i>
                                <div className="user-inner">
                                    <div>Nguyễn Hoa</div>    
                                    <div>DRIVERTHUANPV0</div>  
                                </div>  
                            </div>
                            <div className="vehicle">Truck001</div>
                            <div className="delivered">50</div>
                            <div className="not-give">624</div>
                            <div className="not-delivered">15</div>
                            <div className="weight">624</div>
                            <div className="volume">0.8542</div>
                        </div>
                        <div className="uner-info">
                            <div className="user-name">
                                <i className="material-icons">account_box</i>
                                <div className="user-inner">
                                    <div>Nguyễn Hoa</div>    
                                    <div>DRIVERTHUANPV0</div>  
                                </div>
                            </div>
                            <div className="vehicle">Truck001</div>
                            <div className="delivered">50</div>
                            <div className="not-give">624</div>
                            <div className="not-delivered">15</div>
                            <div className="weight">624</div>
                            <div className="volume">0.8542</div>
                        </div>
                    </div>
                </div>
            
                <div className="pagination-container">
                    <div>Đang hiển thị 1 tới 10 trong 57 kết quả</div>
                    <div className="pagination-inner">
                        <button type="button"> <i className="material-icons">keyboard_arrow_left</i></button>   
                        <button type="button" className="is-active">1</button>    
                        <button type="button">2</button>    
                        <button type="button">3</button>    
                        <button type="button"> <i className="material-icons">keyboard_arrow_right</i></button>    
                    </div>
                </div>
            </div>
        );
    }
}

export default StateGrid;