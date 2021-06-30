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
                <br/><br/>
                <h1>Events on the Conference</h1>
                <br/><br/>
                {this.state.events.length > 0 && this.state.events.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                            <h4>Event Name: {item.name}</h4>
                            <h5>Event code:{item.code}</h5>
                            <h5>Sentence on event: {item.sentence}</h5>
                            <h6>Description: {item.description}</h6>
                            <h6>Organizer Person: {item.person}</h6>
                        </div>
                    </div>
                ))}
                <br/>
            </div>
        )
    }
}

export default EventsView;