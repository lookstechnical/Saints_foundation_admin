import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Login from '../components/Login'
import Home from '../components/Home'
import Details from '../components/Details'

import PrivateRoute from '../components/PrivateRoute'
import Amplify from '@aws-amplify/core'
const config = require('../aws-exports').default

const App = () => {
  Amplify.configure(config)

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
