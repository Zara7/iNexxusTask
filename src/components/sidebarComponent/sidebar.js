import React from "react";
import NavLink from "./nav_link";

class Sidebar extends React.Component {
    state = {
        isActive: false,
    }
    render() {
        return(
           <div className="sidebar-wrapper">
           <span className="burger_menu" onClick={ () => this.setState({isActive: !this.state.isActive})}>
                <i className="material-icons">menu</i>
            </span>
            <div className= {this.state.isActive ? "is-active" : "sidebar"} >
                <span className="close" onClick={ () => this.setState({isActive: !this.state.isActive})}>
                    Close Menu 
                   <i className="material-icons">close</i>
                </span>
                <div className="main-logo"></div>
                <nav>
                    <ul>
                        <li> 
                            <NavLink  to='/'>
                                <i className="material-icons">add_circle_outline</i>  
                                Initialization
                                <i className="material-icons arrow">keyboard_arrow_right</i> 
                            </NavLink >
                        </li>
                        <li    >   
                            <NavLink  to='/routing'>
                                <i className="material-icons">swap_calls</i> 
                                Routing
                                <i className="material-icons arrow">keyboard_arrow_right</i> 
                            </NavLink >
                        </li>
                        <li   > 
                            <NavLink  to='/directional'> 
                                <i className="material-icons">shuffle</i> 
                                Directional
                                <i className="material-icons arrow">keyboard_arrow_right</i> 
                            </NavLink >
                        </li>
                        <li  >   
                            <NavLink  to='/statistics'>
                                <i className="material-icons">show_chart</i>
                                Statistics
                                <i className="material-icons arrow">keyboard_arrow_right</i> 
                            </NavLink >
                        </li>
                    </ul>
                </nav>
            </div> 
            </div>
        );
    }
}
export default Sidebar;