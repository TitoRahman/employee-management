import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import {Navbar, Nav} from 'react-bootstrap'

export default class NavbarComponent extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Item >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg> 
                            </Nav.Item>
                            <Navbar.Text className="text-white font-weight-bold">
                                <div>
                                    Employee Management
                                </div>
                            </Navbar.Text>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}
