import React, { Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Map from '../assets/images/AltaMap.png'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'

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
      <Container>
        { works.map( work => (
          <Link
            to={{ pathname: '/WorksShow', state: { ...work }}}
          >
            <Segment placeholder>
              <HeaderStyles>
                {work.name}
              </HeaderStyles>
                <ImageStyle fluid src={work.image_url} alt=""/>
            </Segment>      
          </Link>
        ))}
      </Container>
    )
  }
}

const ImageStyle = styled(Image)`
  width: 100% !important
  height: 30em !important
  z-index: 0
`
const HeaderStyles = styled(Header)`
  color: white !important
  z-index: 2
  transform: translate(0, 10em)
`


export default Works