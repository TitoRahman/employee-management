import React, { Component } from 'react'
import { Button, Container, Nav, Navbar, Table } from 'react-bootstrap'
import axios from 'axios'
import { FaUserPlus, FaUserTimes, FaUserEdit,  FaRegEye} from "react-icons/fa";

export default class EmployeeTable extends Component {
  constructor (){
    super()
    this.state = {
      employees: []
    }
  }
  getData() {
    axios.get('http://localhost:3001/api/employees')
      .then(response => {
        this.setState({
          employees: response.data
        })
      })
  }

  generateTable() {
    this.getData()
    return this.state.employees.map((employee, index) => {
      const { FirstName, LastName, Email, Address, Phone } = employee
      return (
        <tr key={index}>
          <td className="align-middle">{FirstName}</td>
          <td className="align-middle">{LastName}</td>
          <td className="align-middle">{Email}</td>
          <td className="align-middle">{Phone}</td>
          <td className="align-middle">{Address}</td>
          <td width={30}>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item align-middle" onClick={"#"}><FaRegEye color='#6297FC'/></li>
              <li className="list-group-item align-middle" onClick={"#"}><FaUserEdit color='#FEBF01'/></li>
              <li className="list-group-item align-middle" onClick={"#"}><FaUserTimes color='#F55847'/></li>
            </ul>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (<>
      <div style={{margin: "5em"}}/>
      <Container>
        <Navbar bg="dark" variant="dark" className="p-2">
          <Navbar.Brand>
            <b>Manage Employees</b>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item>
              <Button variant="success">
                <FaUserPlus/>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Container className="shadow-sm p-3 mb-5 bg-white rounded">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.generateTable()}
            </tbody>
          </Table>
        </Container>
      </Container>
      </>
    )
  }
}
