import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import { isLoggedIn } from '../auth/AppUser'
import Amplify from '@aws-amplify/core'
import config from '../aws-exports'
import Login from '../components/Login'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})
const IndexPage = () => {
  return (
    <Layout>
      <Login path="/" />
      <Link to="/app/login">Sign In</Link>
    </Layout>
  )
}

export default IndexPage
