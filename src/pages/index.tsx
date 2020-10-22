import React from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import { isLoggedIn } from '../auth/AppUser'

const config = require('../aws-exports').default

const IndexPage = () => {
  Amplify.configure(config)

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
