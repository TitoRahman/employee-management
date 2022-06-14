import React, { Component } from 'react'
import {FaUserTimes} from 'react-icons/fa';
export default class Delete extends Component {
  render() {
    return (
      <>
        <li className="list-group-item align-middle" style={{cursor: 'pointer'}}>
          <FaUserTimes color='#F55847'/>
        </li>
      </>
    )
  }
}
