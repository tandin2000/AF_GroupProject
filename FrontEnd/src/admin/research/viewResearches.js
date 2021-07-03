import React, {Component} from 'react';
import axios from "axios"


class ViewResearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            research: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/research/')
            .then(response => {
                this.setState({research: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deleteResearch(e, id){
        axios.delete(`http://localhost:8081/research/delete/${id}`)
            .then(response => {
                alert('Data Deleted Successfully')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the New Status: ");
        axios.put(`http://localhost:8081/research/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('Data Updated Successfully')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                 <header className="jumbotron">
                     <h3> Publication Approval </h3>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Researcher Name</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Research Title</th>
                            <th>Description</th>
                            <th>Research URL</th>
                            <th>Current Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.research.length > 0 && this.state.research.map((item,index) => (
                            <tr key={index} className="align-top">
                                <td>{item.researcherName}</td>
                                <td>{item.researcherContactNo}</td>
                                <td>{item.researcherEmail}</td>
                                <td>{item.researchTitle}</td>
                                <td>{item.description}</td>
                                <td>{item.researchURL}</td>
                                {item.status === "not approved" &&
                                <td><span className="badge bg-danger">{item.status}</span></td>
                                }
                                {item.status === "approved" &&
                                <td><span className="badge bg-success">{item.status}</span></td>
                                }
                                <td><button className="update" onClick={e => this.updateStatus(e,item._id)}>
                                    <i className="far fa-edit"></i>
                                </button></td>
                                <td><button className="delete" onClick={e => this.deleteResearch(e,item._id)}>
                                    <i className="fas fa-trash"></i>
                                </button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                </header>
            </div>
        )
    }
}

export default ViewResearches;


