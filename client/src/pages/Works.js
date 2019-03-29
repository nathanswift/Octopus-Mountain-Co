import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import WorksShow from './WorksShow'
import Map from '../assets/images/AltaMap.png'

class Works extends React.Component {
  state = { works: [] }

  componentDidMount() {
    axios.get('/api/works/index')
      .then( res => {
        this.setState({ works: res.data})
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    const { works } = this.state
    return(
      <Fragment>
        { works.map( work => (
          <WorksCard>
            <Link
              to={{ pathname: '/WorksShow', state: { ...work }}}
            >
              <h1>{work.name}</h1>
              <img src={work.image_url} alt=""/>
            </Link>
          </WorksCard>
        ))}
      </Fragment>
    )
  }
}

const WorksCard = styled.div`
  display: flex !important
  margin-left: 200px
  width: 200px
  height: 400px
  justify-content: center !important
  text-align: center
`


export default Works