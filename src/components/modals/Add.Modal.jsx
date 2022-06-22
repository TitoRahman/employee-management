import axios from 'axios';
import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaUserPlus } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            FirstName: '',
            LastName: '',
            Email: '',
            Address: '',
            Phone: ''
        };
        
        this.handleModal = this.handleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModal() {
        this.setState({show: !this.state.show});
        this.props.updateTable()
    } 
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit() {
        if(this.state.FirstName === '' || this.state.LastName === '' || this.state.Email === '' || this.state.Address === '' || this.state.Phone === '') {
            toast.error("Please fill out all fields");
            console.log(this.state);
        }else{
            axios.post('http://localhost:3001/api/employee/add', this.state).then(res => {
                console.log(res);
                console.log(res.data);
                toast.success('Successfully add employee!')
            }).catch(err => {
                console.log(err);
                toast.error('Failed add employee!')
            })
            this.handleModal()
        }
    }

    render() {
        return (
            <>
            <Toaster
                position="top-right"
            />
            <Button variant="success" onClick={() => this.handleModal()}>
                <FaUserPlus/>
            </Button>
            
            <Modal 
            show={this.state.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton onClick={this.handleModal}>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group mb-2">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control" id="FirstName" placeholder="First Name" value={this.state.FirstName} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="LastName" placeholder="Last Name" value={this.state.LastName} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="address">Address</label>
                        <textarea  type="text" className="form-control" id="Address" placeholder="Address" value={this.state.Address} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="Phone" placeholder="Phone" value={this.state.Phone} onChange={this.handleChange}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick={this.handleModal}>Close</button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}
