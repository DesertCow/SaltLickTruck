// #####################################################################
// 
// Authorization server to support the food truck application
//
// Clayton Skaggs Oct 2022
// 
// ---------------------------------------------------------------------

const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const sequelize = require('./db/sqlConnection');
const db = require('./db/mongoConnection');


const { typeDefs, resolvers } = require('./db/schemas');
const seedAll = require('./db/seeds/index');

//TODO: FIX ENV import issues...
const mySQLport = process.env.mySQLport || 3001;
const graphQLport = process.env.graphQLport || 4001;

//* Create Base "App"
const app = express();

//* Apply Configuration to App
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

async function seedServer() {

  try {
    await seedAll();
    console.log('\n\x1b[42m----- SEEDING COMPLETE/VALID -----\x1b[0m\n');
  } catch (error) {
    console.log('\n\x1b[41m----- SEEDING FAILED! -----\x1b[0m\n');
    console.log(error);
  }
}


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

//* Starts all backend servers and DB connections
async function serverStart() {

  //* Start ApolloServer
  await server.start()

  //* Apollo Middleware Insert
  server.applyMiddleware({ app });

  //* Start mongoDB Connection
  db.once('open', () => {


    //* Start SQL Connection
    sequelize.sync({ force: false }).then(() => {
      app.listen(mySQLport, () => {
        console.log("\n~~~       Server Status       ~~~")
        console.log('~~~ MongoDB Database [' + "\x1b[32mOnline\x1b[0m" + '] ~~~')
        console.log('~~~ SQL Database     [' + "\x1b[32mOnline\x1b[0m" + '] ~~~')
        // console.log('\x1b[30m~~~ SQL Connection Valid [' + mySQLport + '] ~~~\x1b[0m\n')

        //* Start GraphQL Server
        app.listen(graphQLport, () => {
          console.log(`~~~ GraphQL API      [` + "\x1b[32mOnline\x1b[0m" + `] ~~~ \n\n\x1b[33mAPI Live:\x1b[0m http://localhost:${graphQLport}${server.graphqlPath}\n\n`);

          //! Seed SWITCH
          // seedServer();

        })
      });
    });
  })
}

//* ========== Main ===========

// * Main Server Call
serverStart();

//* ========== EOM ===========

// ================ Old Code ================

//* CORS Config
// const corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200
//   // Access-Control-Allow-Origin: *
// };

//* Apply CORS Config
// app.use(cors());

//* Share Build output directory
// app.use(express.static(path.join(__dirname, '../public/build')))
// app.get('*', (_, res) => {
//   res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

//* ~~~~~~~~~~~~~~~~~ Database Connection ~~~~~~~~~~~~~~~~~

//* Test Mongoose DB Connection
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   // console.log("DB Connection Successful!")
//   console.log(`| 💡     MongooDB Connection:  \x1b[32mOnline\x1b[0m     💡 |`);

// }).catch((err) => {
//   console.log(err.message);
// });


//!========================= EOF =========================