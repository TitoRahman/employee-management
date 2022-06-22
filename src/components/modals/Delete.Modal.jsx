import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaUserTimes } from 'react-icons/fa'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


export default class Delete extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleModal() {
    this.setState({ show: !this.state.show });
    this.props.updateTable()
  }

  handleSubmit() {
    /* const toast = {
      type: 'success',
      title: 'Success',
      description: 'Employee Deleted Successfully',
      timeOut: 3000,
      position: 'top-right',
      showCloseButton: true,
      animation: true,
      hideProgressBar: true,
      closeButton: true
    } */
    const userId = JSON.parse(this.props.employee)._id;
    try {
      axios.delete('http://localhost:3001/api/employees/' + userId).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })

      toast.success('Success delete employee!')
      console.log(`Employee with id ${userId} has been deleted`);
    } catch (error) {
      console.log(error);
      toast.error('Failed delete employee!')
    }
    this.handleModal()
  }

  render() {
    return (
      <>
        <Toaster
          position="top-right"
        />
        <li className="list-group-item align-middle" style={{ cursor: 'pointer' }} onClick={this.handleModal}>
          <FaUserTimes color='#F55847' />
        </li>

        <Modal
          show={this.state.show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton onClick={this.handleModal}>
            <Modal.Title>Delete Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are You Sure You Want To Delete This Employee?
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" className="btn btn-danger" onClick={this.handleSubmit}>Confirm</Button>
            <Button type="button" className="btn btn-secondary" onClick={this.handleModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
