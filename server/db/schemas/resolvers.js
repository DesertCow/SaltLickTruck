const Category = require("../models/Category")


const resolvers = {
  Query: {
    categories: async () => {

      // return await Category.findAll({});
      // return await Category.find({});
      console.log("Database Find All!")
    }
    // professors: async () => {
    //   return await Professor.find({});
    // }
  },
  hello: () => {
    return 'Hello world!';
  },
  partyOn: () => {
    return 'Party On Garth!';
  },


};

module.exports = resolvers;