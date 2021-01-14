import React from 'react';
import './nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <h1>PuppyTab</h1>
                <nav className="Quick-links">
                    <span className="Nav-tile"><a href="#0">My Household</a></span>
                    <span className="Nav-tile"><a href="#0">Calendar</a></span>
                    <span className="Nav-tile"><a href="#0">Print My Info</a></span>
                    <span className="Nav-tile"><a href="#0">Add Event</a></span>
                    <span className="Nav-tile"><a href="#0">About PuppyTab</a></span>
                </nav>
            </div>
        );
    }
}

export default Nav;