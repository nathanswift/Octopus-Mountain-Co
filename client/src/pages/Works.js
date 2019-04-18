import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import Map from '../assets/images/AltaMap.png'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'
import '../assets/styles/styles.css'

const Works = (props) => {

  const [works, setWorks] = useState([])
  
  // showWork() {
  //   this.setState({ shouldShowWork: true })
  // }

  useEffect( () => {
    axios
        .get('/api/works')
        .then( res => {
          setWorks(res.data)
        })
        .catch( err => {
          console.log(err)
        })
  }, [])
  
  // componentDidMount() {
      // axios
      //   .get('/api/works')
      //   .then( res => {
      //   this.setState({ works: res.data.data })
      // })
      // .catch( err => {
      //     console.log(err)
      //   })
  // }
  
  // render() {
    // const workIcon = 
    // <button 
    // className='mdl-button mdl-js-button' 
    // id='icon-work' 
    //     // onClick={this.showWork}
    //     >
    //   <span 
    //     className='glyphicon glyphicon-work' 
    //     aria-hidden='true'
    //     >
    //   </span></button>


    return(
      <ContainerStyles>
        { works.map( work => (
          <Link
            to={{ pathname: '/WorksShow' }}
          >
            <ScrollAnimation
              animateIn='flipInX'
              animateOut='fadeOut'
            >
              <SegmentStyles placeholder className='work-enter`'>
                <HeaderStyles>
                  {work.name}
                </HeaderStyles>
                <ImageStyle fluid src={work.image_url} alt=""/>
              </SegmentStyles>
            </ScrollAnimation>
          </Link>
        ))
      }
      </ContainerStyles>
    )
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

