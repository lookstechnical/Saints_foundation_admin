import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../auth/AppUser'
import { Link } from 'gatsby'
import API from '@aws-amplify/api'
import { listQuestionaires } from '../graphql/queries'
import { DataGrid } from '@material-ui/data-grid'

const Details = ({ id }) => {
  const user = getCurrentUser()
  const [questionaire, setQuestionaire] = useState({ questions: [] })

  useEffect(() => {
    const getQuestionaires = async () => {
      const list = await API.graphql({
        query: listQuestionaires,
        variables: { filter: { owner: { eq: id } } },
      })
      // @ts-ignore
      const items = list?.data.listQuestionaires.items.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        // @ts-ignore
        return new Date(b.createdAt) - new Date(a.createdAt)
      })

      setQuestionaire(items[0])
    }
    getQuestionaires()
  }, [id])

  const questions = questionaire
    ? questionaire.questions.map((q, index) => ({
        ...q,
        id: index,
      }))
    : []

  console.log(questionaire, 'questions')

  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '100%',
          minHeight: '500px',
          width: ' 100%',
          flexGrow: 1,
        }}
      >
        {questionaire && (
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              pageSize={50}
              columns={[
                {
                  field: 'label',
                  headerName: 'Question',
                  width: 600,
                },
                {
                  field: 'answer',
                  headerName: 'Answer',
                  width: 300,
                  cellClassRules: {
                    covid_clear: params => {
                      console.log(params, 'params')
                      return !params.data.answer
                    },
                    covid_error: params => {
                      return params.data.answer
                    },
                  },
                },
              ]}
              rows={questions}
            />
          </div>
        )}
      </div>
    </>
  )
}
export default Details
