import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

const Footers = () => (
  <Footer style={{display: 'flex !important'}}>
    <FaFacebookF />
    <FaInstagram />
    <FaTwitter />
    <FaGithub />
    <FaLinkedin />
  </Footer>
)

const Footer = styled.table`
  width: 100%
  display: flex !important
  align-content: flex-end !important
  justify-content: center !important
  margin-left: -20px
  transform: translate(0, -100px)
`

export default Footers
