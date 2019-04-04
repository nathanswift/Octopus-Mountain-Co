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
      <ContainerStyles>
        { works.map( work => (
          <Link
            to={{ pathname: '/WorksShow', state: { ...work }}}
          >
            <SegmentStyles placeholder>
              <HeaderStyles>
                {work.name}
              </HeaderStyles>
                <ImageStyle fluid src={work.image_url} alt=""/>
            </SegmentStyles>      
          </Link>
        ))}
      </ContainerStyles>
    )
  }
}

const ImageStyle = styled(Image)`
  width: 100% !important
  height: 30em !important
  z-index: 0
`
const HeaderStyles = styled.span`
  color: white !important
  z-index: 2
  transform: translate(0, 10em)
`
const ContainerStyles = styled(Container)`
  opacity: .5
`
const SegmentStyles = styled(Segment)`
  border: none !important
  width: 80%
  background: transparent !important 
  transform: translate(8em)
`


export default Works