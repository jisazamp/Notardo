import React, { Component } from 'react';
import { Tasks } from '../tasks.json';
import '../App.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="main-nav">
                <div className="banner">
                    <a href="/">
                        {this.props.titulo}
                    </a>
                </div>
            </nav>);
    }
}

export default Navigation;

