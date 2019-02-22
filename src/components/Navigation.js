import React, { Component } from 'react'

import {Link} from 'react-router-dom';

const links = [
    { route: "/", label: "Home"},
    { route: "/about", label: "Sobre"}
];

export default class Navigation extends Component{

    renderLink = () => {
        return links.map( link =>
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
        )
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">{ this.props.apptittle}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        { this.renderLink() }
                    </ul>
                </div>
            </nav>
        )
    }
}