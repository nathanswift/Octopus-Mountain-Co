import React from 'react'
import SidebarLanding from '../assets/images/sidebar-landing.png'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const SidebarHome = () => {

  return(
    <ContainerStyles style={{
      backgroundImage: `url(${SidebarLanding}) !important`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}}
      >
    </ContainerStyles>
  )
}

const ContainerStyles = styled(Container)`
  width: 90%
  height: 43em
  margin-top: 3%
  margin-bottom: 6.5% 
  transform: translate(-5%)
  background-image: ${SidebarLanding}
  background-size: 'cover'
  background-position: 'center'
  background-repeat: 'no-repeat'
`

export default SidebarHome