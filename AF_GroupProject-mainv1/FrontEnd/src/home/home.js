import React, {Component} from 'react';

import axios from 'axios';
import './home.css';
import {BrowserRouter as Router} from "react-router-dom";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main: [],

            name: '',
            venue: '',
            time: '',
            date: '',
            description: ''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:8081/main/mainForHome')
            .then(response => {
                this.setState({ name: response.data.name,venue: response.data.venue,time: response.data.time,date: response.data.date,description: response.data.description })
            })
            .catch(error => {
                alert(error.message)
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


                    <center><h4>-------{this.state.name} Conference at SLIIT------</h4></center>
                    <center><h5>Venue: {this.state.venue}</h5></center>
                    <center>  <h5>Date: {this.state.date}</h5></center>
                    <center>  <h5>Time: {this.state.time}</h5></center>
                    <center>  <h6>Description: {this.state.description}</h6></center>



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