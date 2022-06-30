import React, { Component } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap'
import { FaUserTimes } from 'react-icons/fa'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


export default class Delete extends Component {
  constructor() {
    super();
    this.state = {
      isLoading:false,
      show: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleSubmit() {
    this.setState({isLoading : true})
    const userId = JSON.parse(this.props.employee)._id;
    try {
      axios.delete('https://untitled-889uamqiqzhg.runkit.sh/api/employees/' + userId).then(res => {
        this.props.updateTable({}, userId, 'delete');
        this.setState({isLoading : false});
        toast.success('Success delete employee!');
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
      toast.error('Failed delete employee!')
      this.setState({isLoading : false})
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
            <Button type="button" className="btn btn-danger" onClick={this.handleSubmit}>
            {this.state.isLoading ? 
              <>
                <Spinner animation="border" size='sm' role="status"/>
              </> : 
              <>
                Confirm
              </>
            }
            </Button>
            <Button type="button" className="btn btn-secondary" onClick={this.handleModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
