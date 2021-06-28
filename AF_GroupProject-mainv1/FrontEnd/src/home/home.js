import React, {Component} from 'react';

import axios from 'axios';
import './home.css';
import {BrowserRouter as Router} from "react-router-dom";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/main/')
            .then(response => {
                this.setState({ main: response.data.data });
            })
    }

    render() {
        return (

            <div>

                <div className="container" >
                    <br/>

                    <br/>
                    <br/>
                    <br/>

                    <center>  <h1>---------- WARMLY WELCOME !! --------</h1></center>
                    <br/>
                    <br/>
                    {this.state.main.length > 0 && this.state.main.map((item, index) => (
                        <div key={index} className="card mb-3">

                            <center><h4>-------{item.name} Conference at SLIIT------</h4></center>
                            <center><h5>Venue: {item.venue}</h5></center>
                            <center>  <h5>Date: {item.date}</h5></center>
                            <center>  <h5>Time: {item.time}</h5></center>
                            <center>  <h6>Description: {item.description}</h6></center>

                        </div>
                    ))}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
        )
    }



}

export default Home;