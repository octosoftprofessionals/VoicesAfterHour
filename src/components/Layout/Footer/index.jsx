import React, { useState } from 'react'

import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useStaticQuery, graphql } from 'gatsby'

import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    addToMailchimp(email)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg
        }
        alert(msg)
      })
      .catch((err) => {
        alert(err)
      })
    setEmail('')
  }

  const footer = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        mail
        copyright
        socialMedia {
          Facebook
          GitHub
          Instagram
          Twitch
          Twitter
          Youtube
          Behance
        }
        topSocialMedia {
          Facebook
          Instagram
          Twitter
        }
      }
    }
  `)
  const { mail, copyright, socialMedia, topSocialMedia } =
    footer.contentfulFooter

  return (
    <>
      <FooterTop
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        socialMedia={topSocialMedia}
      />
      <FooterBottom
        mail={mail}
        copyright={copyright}
        socialMedia={socialMedia}
      />
    </>
  )
}

export default Footer
