import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Matchup = () => {
  // TODO: Update the lines below to implement useQuery with QUERY_TECH to load all techs in order to
  // populate the dropdown controls for creating a matchup.
  const { data, loading } = {};

  const techList = [];
  // -----------------------------

  const [formData, setFormData] = useState({
    tech1: "JavaScript",
    tech2: "JavaScript",
  });
  let history = useHistory();

  // TODO: Update the following lines to implement the useMutation hook and use
  // the CREATE_MATCHUP mutation to add a new matchup to the database.
  const [createMatchup, { error }] = [, {}];
  // ---------------------------------------------
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // TODO: add code to submit the form data to the backend to create a new matchup

      
      // ---------------------------------------------

      history.push(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: "JavaScript",
      tech2: "JavaScript",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>Tech 1: </label>
            <select name="tech1" onChange={handleInputChange}>
              {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })}
            </select>
            <label>Tech 2: </label>
            <select name="tech2" onChange={handleInputChange}>
              {techList.map((tech) => {
                return (
                  <option key={tech._id} value={tech.name}>
                    {tech.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Matchup;
