import React, { Component } from 'react';
import axios from 'axios';

class discriptedEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {

            proposals: [],

            name: '',
            description: '',
            code: '',
            person: ''

        }
    }


    componentDidMount() {

        //Edit following with research paper table -----------------------RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

        axios.get(`http://localhost:8081/item/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ proposals: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })

        //Edit with research paper table ------------Render Method Also-----------RRRRRRRRR
        //Edit with research paper table -----------------------RRRRRRRRRRRRRRRRRRRRRRRRRRR




        axios.get(`http://localhost:8081/item/details/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ name: response.data.name,description: response.data.description,code: response.data.code,person: response.data.person })
            })
            .catch(error => {
            alert(error.message)
            })

    }






    render() {
        return (
            <div className="container">


                <br/><br/>
                <h1>--------------------------------------------------------------------------</h1>
                <h1>-----------{this.state.name}--------------</h1>
                <br/><br/>

                <h4>Further:- {this.state.description}</h4>
                <h4>Event Code:- {this.state.code}</h4>
                <h4>Organized By:-: {this.state.person}</h4>

                <br/><br/>



                <h1>--------------------------------------------------------------------------</h1>


            </div>
        )
    }
}

export default discriptedEvents;



/*

//Edit with research paper table -----------------------RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

//Add following to the render metord after yo have created proposal database ---------------

           {this.state.proposals.length > 0 && this.state.proposals.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Reference Name: {item.name}</h4>
                            <h5>Description: {item.description}</h5>
                            <h5>PDF: {item.name}</h5>
                        </div>
                    </div>
                ))}

 //Edit with research paper table -----------------------RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

 */