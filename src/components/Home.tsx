import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'
import Auth from '@aws-amplify/auth'
import API from '@aws-amplify/api'
import { DataGrid } from '@material-ui/data-grid'

import './layout.css'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      let apiName = 'AdminQueries'
      let path = '/listUsers'
      let myInit = {
        queryStringParameters: {
          //   limit: limit,
          //   token: nextToken,
          filter: {
            status: 'CONFIRMED',
          },
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      }
      const { NextToken, ...users } = await API.get(apiName, path, myInit)

      let resp = users.Users.map(u => {
        return { ...u, id: u.Username }
      })

      setUsers(resp)
    }

    getUsers()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '400px',
        width: ' 100%',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          onSelectionChange={newSelection => {
            if (newSelection.rows[0]) {
              const id = newSelection.rows[0].id
              navigate(`/app/details/${id}`)
            }
          }}
          pageSize={50}
          columns={[
            {
              field: 'fullName',
              headerName: 'Full name',
              width: 300,
              valueGetter: params => {
                const firstname = params.data.Attributes.find(
                  a => a.Name === 'given_name'
                )
                const lastname = params.data.Attributes.find(
                  a => a.Name === 'family_name'
                )
                return `${firstname?.Value} ${lastname?.Value}`
              },
            },
            {
              field: 'email',
              headerName: 'Email',
              width: 250,
              valueGetter: params => {
                const email = params.data.Attributes.find(
                  a => a.Name === 'email'
                )

                return `${email?.Value}`
              },
            },
            {
              field: 'DateUpdated',
              headerName: 'Date Updated',
              type: 'datetime',
              width: 300,
              valueGetter: params => {
                const updated = new Date(params.data.UserLastModifiedDate)
                return `${updated.toLocaleDateString()}`
              },
            },
            {
              field: 'status',
              headerName: 'Status',
              width: 300,
              cellClassRules: {
                covid_clear: params => {
                  const status = params.data.Attributes.find(
                    a => a.Name === 'custom:covid_status'
                  )

                  return status?.Value === 'CLEAR' ? true : false
                },
                covid_warning: params => {
                  const status = params.data.Attributes.find(
                    a => a.Name === 'custom:covid_status'
                  )

                  return status?.Value === 'WARNING' ? true : false
                },
                covid_error: params => {
                  const status = params.data.Attributes.find(
                    a => a.Name === 'custom:covid_status'
                  )

                  return status?.Value === 'ERROR' ? true : false
                },
              },
              valueGetter: params => {
                const status = params.data.Attributes.find(
                  a => a.Name === 'custom:covid_status'
                )

                if (status?.Value === 'ERROR') return 'High Risk'
                if (status?.Value === 'CLEAR') return 'Low RIsk'
                if (status?.Value === 'WARNING') return 'MED RIsk'

                return `${status?.Value}`
              },
            },
          ]}
          rows={users}
        />
      </div>
    </div>
  )
}

export default Home
