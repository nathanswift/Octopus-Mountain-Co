import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Home = () => (
    <div style={{display: 'flex'}}>
        <HeaderText as="h1" textAlign="center">Octopus Mountain Co</HeaderText>
        <Header as={ScrollIcon} textAlign="center"> Scroll Down <br/>
            <Icon name="angle down" />
        </Header>
    </div>
)

const HeaderText = styled(Header)`
    display: flex !important
    align-items: center 
    justify-content: center 
    width: 100%
    height: auto
    padding-top: 20%
`

const ScrollIcon = styled(Header)`
    display: flex !important
    justify-content: center
    width: 100%
    height: auto
`

export default Home