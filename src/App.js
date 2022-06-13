import './App.css';
import React from 'react';
import NavbarComponent from './components/Navbar.Component';
import EmployeeTable from './components/EmployeeTable.Component';

class App extends React.Component{
  render() {
    return (
      <nav>
        <NavbarComponent/>
        <EmployeeTable/>
      </nav>
    )
  }
};
export default App;
