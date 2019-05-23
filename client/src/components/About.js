import React from 'react'
import { Grid, Image, Container} from 'semantic-ui-react'
import styled from 'styled-components'
import ProfileImage from '../assets/images/NoHair-min.png'

const About = () => {

  return (
    <ContainerStyles inverted>
      <Grid stackable columns={2} style={{padding: '20px'}}>
        <Grid.Column>
          <HeaderStyle>Story 0.1</HeaderStyle>
          <HeaderTitle>the om origin</HeaderTitle>
          <HeaderStyle>
            A long time ago in a far away land, a group of talented developers had the thought - why work for a development firm when we could build one ourselves?
            it was no easy task but the developers pressed on hoping that one day they too could bring peace to peoples business solutions.
            after many long nights the developers had done it.
            with a gleam in the eye of every developer they forged their alliance. an alliance that today we are proud to call the <br/> octopus Mountain CO.
          </HeaderStyle>
          <HeaderP>
            Octopus Mountain Co is a small startup firm based out of Salt Lake City Utah. We crush deadlines and shred powder.
            Never been afraid to go where no man has gone before. Doing the impossible. Okay, so we might be milking this a bit, but if you're
            looking for quality design, functional mobile and web applications, and helping secure your place on the google hierarchy and raise
            your presence on the web then we're your guys! Based out of Salt Lake City and as long the snow keeps coming down, we'll keep
            coming up with creative solutions to your business needs. So Relax. We got this. Breath with Om.
          </HeaderP>
        </Grid.Column>
        <Grid.Column>
          <ProfileStyle src={ProfileImage} />
        </Grid.Column>
      </Grid>
    </ContainerStyles>
  )
}

const ContainerStyles = styled(Container)`
  width: 90%
  height: 43em
  margin-top: 3%
  margin-bottom: 6.5% 
  transform: translate(-5%)
`
const HeaderP = styled.div`
  font-family: Arial
  font-size: 10pt
`

const HeaderStyle = styled.div`
font-family: Major Mono Display, monospace; !important
  font-style: bold
  font-size: 8pt
  padding-left: 5%
`

const HeaderTitle = styled.div`
  font-family: Major Mono Display, monospace; !important
  font-size: 40pt
  margin-top: 1em
  margin-bottom: 1em 
`

const ProfileStyle = styled(Image)`
  height: 90%
  width: 90%
  margin-left: 2em
`
export default About