import { gql } from '@apollo/client';

// createMatchup mutation. It should accept arguments for tech1 and
// tech2 and return the _id, tech1, and tech2 fields in the result.
export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

// createVote  mutation. It should accept arguments for _id and
// techNum. It should return the _id, tech1, tech2, tech1_votes, and tech2_votes
// fields.
export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
