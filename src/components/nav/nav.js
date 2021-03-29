import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <h1>PuppyTab</h1>
                <div className="Quick-links">
                    <Link className="Nav-tile" to="/">My Household</Link>
                    <Link className="Nav-tile" to="/addPet">Add Pet</Link>
                    <Link className="Nav-tile" to="/addEvent">Add Event</Link>
                    <Link className="Nav-tile" to="/about">About</Link>
                </div>



            </div>
        );
    }
}

export default Nav;