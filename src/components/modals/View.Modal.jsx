import React, { Component } from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { FaRegEye } from 'react-icons/fa'
import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';


export default class View extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal() {
    this.setState({ show: !this.state.show })
    console.log(this.state.show)
  }

  render() {
    return (<>
    
      <li 
      className="list-group-item align-middle" 
      style={{
        cursor: 'pointer'
      }}
      onClick={this.handleModal}
      >
        <FaRegEye color='#6297FC' />
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
        <Table bordered>
          <thead>
            <tr>
              <th>Frist Name</th>
              <td>{JSON.parse(this.props.employee).FirstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{JSON.parse(this.props.employee).LastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{JSON.parse(this.props.employee).Email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{JSON.parse(this.props.employee).Address}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{JSON.parse(this.props.employee).Phone}</td>
            </tr>
          </thead>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" className="btn btn-success" onClick={this.handleModal}>Confirm</Button>
      </Modal.Footer>
      </Modal>
    </>
    )
  }
}
