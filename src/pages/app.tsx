import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Login from '../components/Login'
import Home from '../components/Home'
import PrivateRoute from '../components/PrivateRoute'
import Amplify from 'aws-amplify'
import Details from '../components/Details'
const config = require('../aws-exports').default

const App = () => {
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

  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/home" component={Home} />
        <PrivateRoute path="/app/details/:id" component={Details} />

        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}

export default App
