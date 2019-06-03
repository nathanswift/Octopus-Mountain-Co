import React from 'react'
import styled from 'styled-components'
import { Container, Image, Header } from 'semantic-ui-react'
import blackMenuImg from "../assets/images/OmMenuLogo.png"
import { AuthConsumer } from '../providers/AuthProvider';
import colors from '../themes/colors'

const SidebarHome = () => {

  return (
    <div style={{ width: '100%', marginTop: '10%' }}>
      <Image src={blackMenuImg} centered style={{ display: 'flex', width: '62px', height: '62px', justifyContent: 'center', marginTop: '3%' }} />
      <Container text style={{
        transform: 'translateY(40px)'
      }}>
        <Header
          as="h1"
          style={{
            fontFamily: 'Brothers, regular',
            fontWeight: 700,
            fontStyle: 'normal',
            color: 'white',
          }}
          textAlign="center"
        >
          Hi, we're
        <span style={{ opacity: '0' }}>s</span>
          <span style={{
            fontFamily: 'Brothers, regular',
            fontWeight: 700,
            fontStyle: 'normal',
            color: "black",
          }}>
            Octopus Mountain Co
        </span>
        </Header>
        <Header
          as="h1"
          style={{
            fontFamily: 'Brothers, regular',
            fontWeight: 700,
            fontStyle: 'normal',
            color: `${colors.gold}`,
            transform: 'translateY(-30px)',
          }}
          textAlign="center"
        >
          a design and development firm <br />
          based out of Salt Lake City, UT.
      </Header>
      </Container>
        <div style={{ display: 'flex', height: 'auto', justifyContent: 'center', marginTop: '2%' }}>
          <p style={{
            display: 'inline-block',
            width: '50%',
            height: 'auto',
            textAlign: 'center',
            verticalAlign: 'middle',
            fontFamily: 'Arial, regular',
            fontSize: '13.5px',
            color: `${colors.w}`,
            transform: 'translateY(-15px)',
            fontStyle: 'normal',
            fontWeight: 500
          }}>
            We build web & mobile applications & design hi-fidelity UI/UX renders.
            <br />
            We use quality touches of modern style and
            <br />
            nerd-out to optimize functionality, bringing you peace of mind in all your
            <br />
            online business decisions.
            <br />
            From SEO, Data Analytics, E-Commerce, graphic design, UI/UX, full
            <br />
            stack development, and even social media branding, we have you
            <br />
            covered.
        </p>
        </div>
    </div>
  )
}


export default SidebarHome