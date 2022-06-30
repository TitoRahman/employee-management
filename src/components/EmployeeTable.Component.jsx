import React from 'react'
import { Container, Nav, Navbar, Table} from 'react-bootstrap'
import axios from 'axios'
import Add from './modals/Add.Modal'
import { useEffect } from 'react'
import Delete from './modals/Delete.Modal'
import Edit from './modals/Edit.Modal'
import View from './modals/View.Modal'

const EmployeeTable = () => {
  const fetchData = async () => {
    axios.get('https://untitled-889uamqiqzhg.runkit.sh/api/employees')
      .then(res => {
        setEmployees(res.data);
        console.log('Table Updated')
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  const updateTable2 = (data = null, id = null, action) => {
    if (action === 'add') {
      setEmployees([...employees, data]);
    } else if (action === 'delete') {
      setEmployees(employees.filter(employee => employee._id !== id));
    } else if (action === 'edit') {
      setEmployees(employees.map(employee => employee._id === id ? data : employee));
    }
  }
  const [employees, setEmployees] = React.useState([]);

  return (<>
    <div style={{ margin: "5em" }} />
    <Container>
      <Navbar bg="dark" variant="dark" className="p-2">
        <Navbar.Brand>
          <b>Manage Employees</b>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item>
            <Add updateTable={fetchData}/>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Container className="shadow-sm p-3 mb-5 bg-white rounded">
        { 
        <>
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
            {
              employees.map((employee, index) => {
                const { FirstName, LastName, Email, Address, Phone } = employee;
                return (
                  <tr key={index}>
                    <td className="align-middle">{FirstName}</td>
                    <td className="align-middle">{LastName}</td>
                    <td className="align-middle">{Email}</td>
                    <td className="align-middle">{Address}</td>
                    <td className="align-middle">{Phone}</td>
                    <td width={30}>
                      <ul className="list-group list-group-horizontal">
                        <View  employee={JSON.stringify(employee)}/>
                        <Edit updateTable={updateTable2} employee={JSON.stringify(employee)} />
                        <Delete updateTable={updateTable2} employee={JSON.stringify(employee)} />
                      </ul>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        </>
        }
        
      </Container>
    </Container>
  </>
  )
}

export default EmployeeTable;

