import React from 'react'
import { TitlePage, MainGrid } from '@Components'

const AboutUs = () => {
    const description =
      'Our team is composed ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , content here, making it look like readable English. '
      
    return (
      <MainGrid>
        <TitlePage title="About Us" showText text={description} />
      </MainGrid>
    )
}

export default AboutUs
