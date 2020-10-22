/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionaire = /* GraphQL */ `
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id) {
      id
      name
      questions {
        label
        answer
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionaires = /* GraphQL */ `
  query ListQuestionaires(
    $filter: ModelQuestionaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        questions {
          label
          answer
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
