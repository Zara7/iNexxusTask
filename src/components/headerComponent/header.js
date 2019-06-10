import React from "react";

class Header extends React.Component {
    render() {
        return(
            <header>
                <form className="search-container">
                    <i className="material-icons">search</i>  
                    <input type="search" placeholder="Tìm kiếm cửa hàng"/>
                </form>
                <div className="account-box">
                    <ul className="account-box-list">
                        <li>   
                            <button type="button">
                                <i className="material-icons">notifications</i>  
                            </button>
                        </li>
                        <li>   
                            <button type="button">
                                <i className="material-icons">email</i>  
                            </button>
                        </li>
                        <li>   
                            <button type="button">
                                <i className="material-icons account">account_circle</i>  
                            </button>
                            <span className="admin-user">Admin Super</span>
                        </li>
                        <li>   
                            <button type="button">
                                <i className="material-icons more-vert">more_vert</i>  
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;