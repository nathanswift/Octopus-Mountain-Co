import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaDribbble } from 'react-icons/fa';

const Dashboard = () => (
  <div>
    <Link to="/Profile">
      <DashBut>
        Profile
      </DashBut>
    </Link>
    <Link to="/Dashboard/Messages">
      <DashBut>
        Messages
      </DashBut>
    </Link>
    <Link to="/Dashboard/Analytics">
      <DashBut>
        Analytics
      </DashBut>
    </Link>
    <Link to="/Dashboard/Payments">
      <DashBut>
        Payment
      </DashBut>
    </Link>
  </div>
)

// client
// give a display of all the dashboard users
// set up state where Om can recieve an alert when a message has been stored in our db
// allow us to route our payment to the om bank account
// allows us to leave a message for client and see their response

const DashBut = styled.div`
  height: 1em
  width: 1em
  margin-left: 8em
  margin-top: 6em
  display: flex !important
  justify-content: center
`

export default Dashboard