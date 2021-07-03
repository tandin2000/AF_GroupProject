import React, { Component} from 'react';
import axios from 'axios';

class TemplateDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/templatetes/GetAllTemplateTes')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }


    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                <h1>Download</h1>
                <h6>Download the papers you want...</h6>
            
                {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <h4><t>Name of the Template: <b> {item.name}</b></t></h4>
                        <h5>Type of the Template: {item.type}</h5>
                        <br/>
                        <h5>  <b> About the Usage: </b> </h5>
                        <h6>   {item.description} </h6>
                        <br/>
                        <h6> <b>  Download Here: </b><a href={item.link}>GET_TEMPLATE</a></h6>
                        
                    </div>
                ))}
                <br/>
                <h6>(*All Rights Reserved @conferance.sliit.lk)</h6>
                </header>
            </div>





        )
    }
}

export default TemplateDownload;