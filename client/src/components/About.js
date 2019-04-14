import React from 'react'
import { Grid, Image, Container} from 'semantic-ui-react'
import styled from 'styled-components'

const About = () => {

  return (
      <Grid columns={3}>
        <Grid.Column>
          <Grid.Row>
            <Image src="https://b-i.forbesimg.com/johnhall/files/2013/09/0318_biz-plans-eager-team_380x2781.jpg"></Image>
          </Grid.Row>
          <Grid.Row col={3}>
            <Grid.Colum>
              <Image as={InstagramPicture} src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-450w-1037719204.jpg"/>
            </Grid.Colum>
            <Grid.Colum>
              <Image as={InstagramFrontPic} src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-450w-1037719204.jpg"/>
            </Grid.Colum>
            <Grid.Colum>
              <Image as={InstagramPicture} src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-450w-1037719204.jpg"/>
            </Grid.Colum>
          </Grid.Row>
        </Grid.Column>
        Octopus Mountain Co is a small startup firm based out of Salt Lake City Utah. We crush deadlines and shred powder.
        Never been afraid to go where no man has gone before. Doing the impossible. Okay, so we might be milking this a bit, but if you're
        looking for quality design, functional mobile and web applications, and helping secure your place on the google hierarchy and raise
        your presence on the web then we're your guys! Based out of Salt Lake City and as long the snow keeps coming down, we'll keep
        coming up with creative solutions to your business needs. So Relax. We got this. Breath with Om.
      </Grid>
  )
}

const InstagramFrontPic = styled(Image)`
`
const InstagramPicture = styled(Image)` 
  display: flex
  justify-content: space-between
`
export default About