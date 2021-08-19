import { gql } from '@apollo/client';

// Tech query. It should return the _id and name fields for each
// tech.
export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

// Implement matchups query. It should optionally accept an _id parameter.
// It should return the _id, tech1, tech2, tech1_votes, and tech2_votes fields
// for each matchup in the results.
export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
