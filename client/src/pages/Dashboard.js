import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaDribbble } from 'react-icons/fa';

const Dashboard = () => (
  <div>
    <Link to="/Dashboard/Users">
      <DashBut>
        Users
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


const DashBut = styled.div`
  height: 1em
  width: 1em
  margin-left: 8em
  margin-top: 6em
  display: flex !important
  justify-content: center
`

export default Dashboard