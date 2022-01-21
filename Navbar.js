import React from "react";
import { Link, NavLink,withRouter } from 'react-router-dom';
//NavLink => active class
//Link to => Prevent Default Reload, react-router-dom will take over
const Navbar = (props) => {
    
    return(
        
        <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">Nafisa</a>
        <div className="ui right floated header">
            <button className="ui button"><Link to="/">Home</Link></button>
            <button className="ui button"><Link to="/about">About</Link></button>
            <button className="ui button"><Link to="/contact">Contact</Link></button>

        </div>

        </nav>
        
    )
}
export default withRouter(Navbar);