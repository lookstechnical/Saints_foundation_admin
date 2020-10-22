import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import config from '../aws-exports'
import { isLoggedIn } from '../auth/AppUser'

const IndexPage = () => {
  useEffect(() => {
    // Have to create a function with async inside of useEffect since it doesn't like async on the root function
    async function initAmplify() {
      const Amplify = await import('aws-amplify')
      Amplify.default.configure({
        ...config,
        Analytics: {
          disabled: true,
        },
      })
      // ...other stuff. I added Amplify.Auth to state here so I could use it for signIn, signOut, etc.
    }
    initAmplify()
  }, [])

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
