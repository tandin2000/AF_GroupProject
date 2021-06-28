import React, {Component} from 'react';
import './login.scss';
import axios from "axios";

import { NotificationContainer, NotificationManager } from 'react-notifications';

//import {connect} from 'react-redux';
//import {loginUserAccount} from '../../actions/userActions';
//import _ from 'lodash';

//import Navbar from "../navbar/navbar";
import {BrowserRouter as Router} from "react-router-dom";


let initialState = {
    username: '',
    password: '',
    typeR: ''
};


class login extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialState;
      /*  this.state = {
            main: []
        }*/
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    navigateAdminPage(e, courseId) {
        window.location = `/admin`
       // window.location = `/${courseId}`
    }



    /*
    componentDidMount() {
        axios.get('http://localhost:8080/user/getAllUsers')
            .then(response => {
                this.setState({ main: response.data.data });
            })
    }
*/
/*
    componentDidMount() {
        axios.get(`http://localhost:8080/user/getsingleuser?namer=${this.state.username}`)
            .then(response => {
                this.setState({ subjects: response.data.data }, () => {
                    let data = [];
                    this.state.subjects.map((item, index) => {
                        let subject = {
                            value: item._id,
                            namer: item.name,
                            typer: item.type,
                            emailr: item.email
                        }
                        data.push(subject)
                    });
                    this.setState({ options: data });
                })
            })
    }

 */
/*
    componentDidMount() {
        axios.get('http://localhost:8087/subject/')
            .then(response => {
                this.setState({ subjects: response.data.data }, () => {
                    let data = [];
                    this.state.subjects.map((item, index) => {
                        let subject = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(subject)
                    });
                    this.setState({ options: data });
                })
            })
    }
*/

    onSubmit(e) {
        axios.get(`http://localhost:8080/user/getsingleuser/${this.state.username}`)
            .then(res => {
                if(res.data.success){
                    window.location='/admin'
                }
            })
        /*
        console.log(this.state.username); //For testing process
        console.log(this.state.password); //For testing process
        console.log(this.state.main); //For testing process

        //e.preventDefault();
        this.state.subjects.length > 0 && this.state.main.map((item, index) => {

            console.log(item.name); //For testing process
            console.log(item.type); //For testing process

            if (this.state.username === item.namer) {
                if (this.state.password === item.namer) {
                    if (this.state.typeR === item.typer) {
                     //   this.navigateAdminPage(e, this.item._id);
                        console.log(this.state.password); //For testing process
                        console.log('hahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.......');
                    } else {
                        NotificationManager.error('Error with login')
                    }
                } else {
                    NotificationManager.error('Error with login')
                }
            } else {
                NotificationManager.error('Error with login')
            }
        })

         */
    }




    render() {
        return (
            <div className="container">
                <br/><br/><br/>
                <h1>Log IN</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Name new</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>



                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="typeR" className="form-label">Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="typeR"
                            name="typeR"
                            value={this.state.typeR}
                            onChange={this.onChange}
                        />
                    </div>
                    <br/><br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br/><br/><br/><br/>

                </form>

            </div>
        )
    }




}

export default login;


