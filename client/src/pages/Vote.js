import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { CREATE_VOTE } from '../utils/mutations';

const Vote = () => {
  // --------------------------------------------------------------------------
  // QUERY_MATCHUPS query to get
  // matchup for a specific id. Hint: how can you get the id of the matchup from
  // the path in the url?
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: {
      _id: id,
    },
  });

  const matchup = data?.matchups || [];
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // modify the following line to implement the CREATE_VOTE mutation which
  // will be used to update votes for the matchup.
  const [createVote, { error }] = useMutation(CREATE_VOTE);

  // --------------------------------------------------------------------------

  const handleVote = async (techNum) => {
    try {
      // --------------------------------------------------------------------------
      // use the createVote function from the CREATE_VOTE mutation to add
      // a vote to the matchup for the given techNum.
      //
      // --------------------------------------------------------------------------
      await createVote({
        variables: { _id: id, techNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {matchup[0].tech1} vs. {matchup[0].tech2}
          </h2>
          <h3>
            {matchup[0].tech1_votes} : {matchup[0].tech2_votes}
          </h3>
          <button className="btn btn-info" onClick={() => handleVote(1)}>
            Vote for {matchup[0].tech1}
          </button>{' '}
          <button className="btn btn-info" onClick={() => handleVote(2)}>
            Vote for {matchup[0].tech2}
          </button>
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all matchups
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Vote;
