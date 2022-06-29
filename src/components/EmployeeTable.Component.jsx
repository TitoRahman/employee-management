import React from 'react'
import { Container, Nav, Navbar, Table, Spinner} from 'react-bootstrap'
import axios from 'axios'
import Add from './modals/Add.Modal'
import { useEffect } from 'react'
import Delete from './modals/Delete.Modal'
import Edit from './modals/Edit.Modal'
import View from './modals/View.Modal'

const EmployeeTable = () => {
  const fetchData = async () => {
    setIsLoading(true)
    axios.get('https://untitled-889uamqiqzhg.runkit.sh/api/employees')
      .then(res => {
        setEmployees(res.data);
        setIsLoading(false)
        console.log('Table Updated')
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const [employees, setEmployees] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

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
        isLoading ? 
        <>
          <Spinner animation="border" role="status"/>
          <p>Loading Table Content</p>
        </> : 
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
                const { FirstName, LastName, Email, Address, Phone } = employee
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
                        <Edit updateTable={fetchData} employee={JSON.stringify(employee)} />
                        <Delete updateTable={fetchData} employee={JSON.stringify(employee)} />
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

