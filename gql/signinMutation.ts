import { gql } from 'urql'

export const SignInMutation = gql`
  mutation Mutation($input: AuthInput!) {
    signin(input: $input) {
      token
    }
  }
`
