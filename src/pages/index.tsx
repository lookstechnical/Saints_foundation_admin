import React from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import { isLoggedIn } from '../auth/AppUser'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

const IndexPage = () => {
  if (!isLoggedIn()) {
    navigate(`/app/login`)
    return null
  }

  if (isLoggedIn()) {
    navigate(`/app/home`)
    return null
  }

  return (
    <Layout>
      <Link to="/app/login">Sign In</Link>
    </Layout>
  )
}

export default IndexPage
