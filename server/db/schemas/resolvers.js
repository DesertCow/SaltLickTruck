// const Category = require("../models/Category")


const resolvers = {
  Query: {
    // categories: async () => {

    //   // return await Category.findAll({});
    //   // return await Category.find({});
    //   console.log("Database Find All!")
    // },
    hello: async () => {
      return 'Hello world!';
    },
    partyOn: async () => {
      return 'Party On Garth!';
    }
  }
};

module.exports = resolvers;