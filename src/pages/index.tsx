import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import { isLoggedIn } from '../auth/AppUser'
import Amplify from '@aws-amplify/core'
import config from '../aws-exports'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})
const IndexPage = () => {
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(`/app/login`)
      return null
    }

    if (isLoggedIn()) {
      navigate(`/app/home`)
      return null
    }
  }, [])

  return (
    <Layout>
      <Link to="/app/login">Sign In</Link>
    </Layout>
  )
}

export default IndexPage
