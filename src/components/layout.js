import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, navigate } from 'gatsby'
import Logo from '../assets/SCDF-logo.png'

import './layout.css'
import { isLoggedIn, logout } from '../auth/AppUser'
import { Auth } from 'aws-amplify'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={Logo} width="300" alt="SCDF-logo" />
          {isLoggedIn() && (
            <p
              onClick={() =>
                Auth.signOut()
                  .then(logout(() => navigate('/app/login')))
                  .catch(err => console.log('eror:', err))
              }
              style={styles.link}
            >
              Sign Out
            </p>
          )}
        </div>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
  },
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
