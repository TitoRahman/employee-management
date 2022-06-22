import axios from 'axios';
import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaUserEdit } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      FirstName: '',
      LastName: '',
      Email: '',
      Address: '',
      Phone: ''
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initialState = this.initialState.bind(this);
  }
  initialState() {
    const Employee = JSON.parse(this.props.employee);
    this.setState({
      FirstName: Employee.FirstName,
      LastName: Employee.LastName,
      Email: Employee.Email,
      Address: Employee.Address,
      Phone: Employee.Phone
    })
  }
  handleModal() {
    this.setState({ show: !this.state.show });
    this.props.updateTable()
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  async handleSubmit() {
    const userId = JSON.parse(this.props.employee)._id;
    const employee = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Address: this.state.Address,
      Phone: this.state.Phone
    }
    console.table(employee)

    if(this.state.FirstName === '' || this.state.LastName === '' || this.state.Address === '' || this.state.Phone === '') {
      toast.error("Please fill out all fields");
      console.log(this.state);
    }else{
      try {
        await axios.patch(
          'http://localhost:3001/api/employees/' + userId, 
          employee
          )
        this.handleModal();
        toast.success('Success update employee!')
      } catch (error) {
        console.log(error);
        toast.error('Failed to update employee!')
      }
    }
  }
  render() {
    return (
      <>
        <Toaster
          position="top-right"
        />
        <li className="list-group-item align-middle"
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {
            this.handleModal()
            this.initialState()
          }} >
          <FaUserEdit color='#FEBF01' />
        </li>

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
              <input type="text" className="form-control" id="FirstName" placeholder="First Name" value={this.state.FirstName} onChange={this.handleChange} />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="LastName" placeholder="Last Name" value={this.state.LastName} onChange={this.handleChange} />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange} readOnly/>
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
            <Button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</Button>
            <Button type="button" className="btn btn-secondary" onClick={this.handleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
