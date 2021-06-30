import React, { Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    name: '',
    code: '',
    description: '',
    sentence: '',
    person: '',
    proposals: [],
    options: [],
    selectedProposals: []
}

class addEvent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onProposalsSelect = this.onProposalsSelect.bind(this);
        this.state = initialState;
    }


    //Need to edit here by referances------------- RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

    componentDidMount() {
        axios.get('http://localhost:8081/proposals/')
            .then(response => {
                this.setState({ proposals: response.data.data }, () => {
                    let data = [];
                    this.state.proposals.map((item, index) => {
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

    //Need to edit here by referances------------- RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR




    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onProposalsSelect(e) {
        this.setState({ selectedProposals: e ? e.map(item => item.value) : [] });
    }

    onSubmit(e) {
        e.preventDefault();
        let course = {
            name: this.state.name,
            code: this.state.code,
            description: this.state.description,
            sentence: this.state.sentence,
            person: this.state.person,
            proposals: this.state.selectedProposals
        };
        console.log('DATA TO SEND', course)
        axios.post('http://localhost:8081/item/createEvent', course)
            .then(response => {
                alert('Event Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }



    render() {
        return (

            <div className="container">
                <h1>Create Event</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Event Name</label>
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
                        <label htmlFor="code" className="form-label">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="code"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="sentence" className="form-label">sentence on it:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sentence"
                            name="sentence"
                            value={this.state.sentence}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="person" className="form-label">Organizer person:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="person"
                            name="person"
                            value={this.state.person}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        />
                    </div>

                    <label htmlFor="proposals" className="form-label">Selected Proposals:</label>
                    <Select
                        options={this.state.options}
                        onChange={this.onProposalsSelect}
                        className="basic-multi-select"
                        isMulti
                    />

                    <br/> <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>

              <br/> <br/> <br/>
                </form>


            </div>
        )
    }



}

export default addEvent;