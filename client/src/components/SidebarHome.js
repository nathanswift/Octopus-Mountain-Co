import React from 'react'
import styled from 'styled-components'
import { Container, Image, Header } from 'semantic-ui-react'
import blackMenuImg from "../assets/images/OmMenuLogo.png"
import { AuthConsumer } from '../providers/AuthProvider';
import colors from '../themes/colors'

const SidebarHome = () => {

  return(
    <div style={{ width: '100%', marginTop: '10%'}}>
      <ContainerStyles>
        <Image src={blackMenuImg} alignItems='center' style={{ display: 'flex', width: '40px', height: '40px', alignItems: 'center'}}/>
        <Header 
          as="h2"
          style={{
            fontFamily: 'Brothers OT, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            color: 'white'
          }}
          > 
            Hi, we're 
          </Header>
        <Header 
          as="h1" 
          style={{ 
            fontFamily: 'Brothers OT, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal'
            }}> 
            Octopus Mountain Co 
        </Header>
        <br/>
        <Header 
        as="h1"
        style={{ 
          fontFamily: 'Brothers OT, sans-serif',
          fontWeight: 700,
          fontStyle: 'normal',
          color: `${colors.gold}`
          }}> 
          a design and development firm 
          based out of Salt Lake City, UT.
          </Header>
      </ContainerStyles>
      <div style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: 'center', marginTop: '2%'}}>
        <p style={{ display: 'inline-block', width: '50%', height: 'auto', textAlign: 'center', verticalAlign: 'middle'}}>
          We build web & mobile applications & design hi-fidelity UI/UX renders.
          We use quality touches of modern style and 
          nerd-out to optimize functionality, bringing you peace of mind in all your online business decisions.
          From SEO, Data Analytics, E-Commerce, graphic design, UI/UX, full stack development, and even social media branding, we have you covered.
        </p>
      </div>
    </div>
  )
}

const ContainerStyles = styled(Container)`
  display: flex !important
  justify-content: center
  width: 100% !important
  height: auto !important
`

export default SidebarHome