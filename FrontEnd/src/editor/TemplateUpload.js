import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
    name: '',
    type: '',
    link: '',
    description: '',
    options: ["Research","Workshop"]
}

class CreateTemplate extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        let subject = {
            name: this.state.name,
            type: this.state.type,
            link: this.state.link,
            description: this.state.description
        }
        console.log('DATA TO SEND', subject);
        axios.post('http://localhost:8081/templatetes/createTemplateTes', subject)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                <h1>Add New Templates</h1>
                <br/>
                <form onSubmit={this.onSubmit}>

                    <div className="mb-3">
                    <b>  <label htmlFor="name" className="form-label">Template Name To be Displayed:</label> </b>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>




                    <div className="mb-3">
                    <b>    <label htmlFor="type" className="form-label">Select Template Type:</label></b>

                <input
                            type="text"
                            className="form-control"
                            id="type"
                            name="type"
                            value={this.state.type}
                            onChange={this.onChange}
                        />

                    </div>


                    <div class="mb-3">
                    <b> <label htmlFor="description" class="form-label">Description to be displayed:</label> </b>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}>
                        </textarea>
                    </div>


                    <div className="mb-3">
                    <b>  <label htmlFor="link" className="form-label">Insert Downloadable URL (from ICAF conference drive):</label></b>
                <input
                            type="text"
                            className="form-control"
                            id="link"
                            name="link"
                            value={this.state.link}
                            onChange={this.onChange}
                        />
                    </div>

                    <br/>
                    <button type="submit" className="btn btn-primary">Add This Template</button>
                    
                </form>
                </header>
            </div>
        )
    }
}

export default CreateTemplate;