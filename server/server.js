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

const path = require('path');


const { typeDefs, resolvers } = require('./db/schemas');
const seedAll = require('./db/seeds/index');

//TODO: FIX ENV import issues...
const mySQLport = process.env.mySQLport || 3001;
const graphQLport = process.env.PORT || 4001;

// const http = require('http');

// const http = require('http').Server(app);

// const socketIOport = process.env.socketIOport || 3002;

// const { Server } = require("socket.io");

// const http = require('http');



//* Create Base "App"
const app = express();

// const http = require('http');
// const serverIO = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(serverIO);

// var http = require('http').Server(app);
// var io = require('socket.io')(http);

const socket = require("socket.io");

//* Socket IO
//New imports
// const serverIO = http.createServer(app);
// const http = require('http').Server(app);

const cors = require('cors');
app.use(cors());

// const io = new Server(serverIO);





//* Apply Configuration to App
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let PORT = 3000

const server_IO = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});


// Socket setup
// const io = socket(server_IO);
// const io = socket(server_IO);

const io = require("socket.io")(server_IO, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"]
  }
});


// const socketIO = require('socket.io')(http, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   }
// });


io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    socket.broadcast.emit('hi');
  });
});

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


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// const socketIO = require('socket.io')(http, {
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//   }
// });

// // const onlineUsers = new Map()
// // let socketCount = 0;

// socketIO.on("connection", (socket) => {

//   console.log("New Socket Connection: " + socket.id);
//   socket.emit("hello", "world");
//   // global.chatSocket = socket;

//   socket.on("add-user", (userId) => {
//     // onlineUsers.set(userId, socket.id);
//     // socketCount++;
//   });

//   socket.on('disconnect', (data) => {
//     console.log(`${socket.id} disconnected`);
//     // onlineUsers.delete(socket.id) // delete socket from Map object
//     // socketCount--;
//   });

//   socket.on("send-msg", (data) => {
//     // const sendUserSocket = onlineUsers.get(data.to);
//     // if (sendUserSocket) {
//     // socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//     // }
//   });

//   // console.log("Socket Count = " + socketCount);

// });

console.log("Socket IO started!")

// app.use(express.static(path.join(__dirname, '../client/src/img')));

// app.get('/img/Salt_Lick_Menu_DWood-PDF.pdf', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/src/img/Salt_Lick_Menu_DWood-PDF.pdf'));
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