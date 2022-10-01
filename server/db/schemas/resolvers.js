// const Category = require("../models/Category")


const resolvers = {
  // categories: async () => {

  //   // return await Category.findAll({});
  //   // return await Category.find({});
  //   await console.log("Database Find All!")
  //   return 'SAD FACE :('
  // },
  Query: {
    hello: async () => {
      return 'Hello world!'
    },
    partyOn: async () => {
      return 'Party On Garth!'
    },
  }

};

module.exports = resolvers;