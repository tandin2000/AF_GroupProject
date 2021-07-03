import React, { Component} from 'react';
import axios from 'axios';

class EventsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/item/')
            .then(response => {
                this.setState({ events: response.data.data });
            })
    }

    navigateSubjectPage(e, courseId) {
        window.location = `/${courseId}`
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                <h1>Events on the Conference</h1>
                {this.state.events.length > 0 && this.state.events.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                            <br/>
                            <center><h2><b>{item.name}</b></h2></center>
                            <center> <h12><b>Event code:</b>{item.code}</h12></center>
                            <center><h5><b>{item.sentence}</b></h5></center>
                            <h6>Assigned Content Creator:- {item.person} by International Conference on Application Frameworks </h6>
                            <h6>Any Further Clarifications contact:- ruvinduagk@gmail.com (Offecial Perpoces Only)</h6>
                            
                        </div>
                    </div>
                ))}
                <br/>
                </header>
            </div>
        )
    }
}

export default EventsView;