/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionaire = /* GraphQL */ `
  mutation CreateQuestionaire(
    $input: CreateQuestionaireInput!
    $condition: ModelQuestionaireConditionInput
  ) {
    createQuestionaire(input: $input, condition: $condition) {
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
export const updateQuestionaire = /* GraphQL */ `
  mutation UpdateQuestionaire(
    $input: UpdateQuestionaireInput!
    $condition: ModelQuestionaireConditionInput
  ) {
    updateQuestionaire(input: $input, condition: $condition) {
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
export const deleteQuestionaire = /* GraphQL */ `
  mutation DeleteQuestionaire(
    $input: DeleteQuestionaireInput!
    $condition: ModelQuestionaireConditionInput
  ) {
    deleteQuestionaire(input: $input, condition: $condition) {
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
