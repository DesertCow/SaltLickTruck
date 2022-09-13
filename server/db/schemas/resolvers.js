const Category = require("../models/Category")


const resolvers = {
  Query: {
    categories: async () => {

      // return await Category.findAll({});
      return await Category.find({});
    }
    // professors: async () => {
    //   return await Professor.find({});
    // }
  }


};

module.exports = resolvers;