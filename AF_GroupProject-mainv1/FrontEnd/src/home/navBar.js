/*

import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div data-testid="nav-1">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Conference Planner</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop">WorkShop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-workshop">WorkShop Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-attendee">Attendee</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-payment">Attendee payment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/editor">Conference</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/researcher">Researcher</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/reviewer">Reviewer</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;

*/


import React from 'react';

//import logo from '../../Logo/Volcano.png;
//**************** please the above logo is generating some error************************************************


import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
                    <div className="container-fluid">



                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand" href="/">ICEF</a>
                                <span className="nav-content">


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="/workshop">WorkShop</a>
                      </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/create-workshop">WorkShop Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/workshop-attendee">Attendee</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/workshop-payment">Attendee payment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/editor">Conference</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/researcher">Researcher</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/reviewer">Reviewer</a>
                                </li>

                    </ul>
                  </span>


                        </div>
                        <div>
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="dropDown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropDown">
                                <li>
                                    <a className="dropdown-item" href="#">Create Account</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Login</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;