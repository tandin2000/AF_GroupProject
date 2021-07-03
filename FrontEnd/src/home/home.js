import React, {Component} from 'react';

import axios from 'axios';


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

                <div className="containert" >

                    <center>  <h3><b>************************************</b></h3></center>
                    <br/>
                    <center> <img src="http://www.observereducation.lk/wp-content/uploads/2019/06/SLIIT-LOGO-827x1024.png" alt="Conferace-Logo" width="168" height="200"/>   </center>

                    <center>  <h1><b> WARMLY WELCOME !! </b></h1></center>
                    <br/>
                    <br/>

                        <center><h2><b>{this.state.name} Conference at SLIIT</b></h2></center>

                    <center><h5>Organized by, Sri Lanka Institute of Information Technology</h5></center>

                    <br/>
                        <center><h5>Venue: <b>{this.state.venue}</b></h5></center>
                        <center>  <h5>Date:<b> {this.state.date}</b></h5></center>
                        <center>  <h5>Time: <b>{this.state.time}</b></h5></center>
                        <center>  <h6>On the day: {this.state.description}</h6></center>
                    <br/>
                    <br/>


                    <br/>
                    <br/>
                    <br/>
                    <center>  <h3><b>************************************</b></h3></center>
                  



                </div>

            </div>
        )
    }



}

export default Home;