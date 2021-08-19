const { Tech, Matchup } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
      // return array containing all Tech documents
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      // TODO: if an _id parameter is provided return array with the matchup for
      // that _id. If no _id parameter is provided, return all matchup
      // documents.
      const params = _id ? { _id } : {};
      return [];
    },
  },
  Mutation: {
   
      // TODO: create new matchup and return it.
      createMatchup: async (parent, args) => {
        const matchup = await Matchup.create(args);
        return matchup;
      
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
