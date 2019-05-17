import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const Services = () => (
  <ContainerStyles inverted>
    We offer full website services from Design to Implementation. Using full frameworks and database 
    architecture we can build you're website from the ground up! Need to interact better with clients or your team? Need a great logo, graphic design, 
    or to build your presence on social media? Want to build an app, revamp your website, or build one from scratch?
    Have a great Idea that you want to take to a global platform? 
    We can help. No project is too big!
  </ContainerStyles>
)

const ContainerStyles = styled(Container)`
  width: 90%
  height: 43em
  margin-top: 3%
  margin-bottom: 6.5% 
  transform: translate(-5%)
`

export default Services