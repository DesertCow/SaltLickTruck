/*
* =================================================================
* FOOD TRUCK BACKEND - Node.js, Express, GraphQL
* =================================================================
*
* Description:
* This file contains the complete backend server for the Salt Lick
* food truck ordering application.
*
* Tech Stack:
* - Node.js: JavaScript runtime environment
* - Express: Web application framework for Node.js
* - Apollo Server: GraphQL server for Express
* - GraphQL: Query language for your API
* - jsonwebtoken: For generating and verifying admin auth tokens
* - bcryptjs: For hashing admin passwords
* - cors: For enabling Cross-Origin Resource Sharing
*
* To Run This (Locally):
* 1. Make sure you have Node.js and npm installed.
* 2. Save this file as `server.js`.
* 3. In the same directory, run `npm init -y`.
* 4. Run `npm install express @apollo/server graphql jsonwebtoken bcryptjs cors`.
* 5. Run `node server.js`.
* 6. The server will start on http://localhost:4000/graphql.
* You can access the GraphQL Playground in your browser to test queries.
*
* ---
*
* Note on Database:
* For simplicity, this backend uses in-memory arrays as a mock database.
* In a production environment, you would replace this with a connection
* to a real database like MongoDB, PostgreSQL, or Firebase Firestore.
* The GraphQL resolvers are designed to be easily adaptable to any
* database by swapping out the data logic.
*
*/

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const http = require('http');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- Configuration ---
const JWT_SECRET = 'this-is-a-super-secret-key-for-jwt'; // In production, use environment variables!
const PORT = process.env.PORT || 4000;

// --- Mock Database ---
// In a real application, this data would come from a database.
let menuItems = [
  { id: '1', name: "BRISKET PLATE", price: 17.95, category: 'Plates', description: "Served w/beans, potato salad & coleslaw." },
  { id: '2', name: "PORK RIBS PLATE", price: 14.95, category: 'Plates', description: "Served w/beans, potato salad & coleslaw." },
  { id: '3', name: "SAUSAGE PLATE", price: 11.95, category: 'Plates', description: "Served w/beans, potato salad & coleslaw." },
  { id: '4', name: "SLICED BEEF SANDWICH", price: 12.95, category: 'Sandwiches', description: "A classic sliced beef sandwich." },
  { id: '5', name: "PULLED PORK SANDWICH", price: 10.95, category: 'Sandwiches', description: "Topped with coleslaw & spicy bbq sauce." },
  { id: '6', name: "PECAN PIE", price: 5.95, category: 'Desserts', description: "A slice of homemade pecan pie." },
  { id: '7', name: "COKE", price: 2.50, category: 'Beverages', description: "A refreshing Coca-Cola." },
];

let orders = [
    {
        id: '101',
        customerName: 'John Doe',
        items: [
            { menuItemId: '1', quantity: 1, name: 'BRISKET PLATE', price: 17.95 },
            { menuItemId: '7', quantity: 2, name: 'COKE', price: 2.50 },
        ],
        total: 22.95,
        status: 'Completed', // Pending -> In Progress -> Completed
        createdAt: new Date().toISOString(),
    }
];
let nextMenuItemId = 8;
let nextOrderId = 102;

// Hardcoded admin user for demonstration
const users = [
    {
        id: 'admin01',
        username: 'admin',
        // In a real app, this hash would be generated and stored securely on user creation.
        // This hash is for the password "password123"
        passwordHash: '$2a$10$Y.aV5.xY9.I/8An/5e5hKej11Cr9eFTxGCLwE/yvCSaDUIB9GgQgi'
    }
];

// --- GraphQL Schema (Type Definitions) ---
const typeDefs = `#graphql
  type MenuItem {
    id: ID!
    name: String!
    price: Float!
    category: String!
    description: String
  }

  type OrderItem {
    menuItemId: ID!
    quantity: Int!
    name: String!
    price: Float!
  }

  type Order {
    id: ID!
    customerName: String!
    items: [OrderItem!]!
    total: Float!
    status: String! # e.g., "Pending", "In Progress", "Completed"
    createdAt: String!
  }
  
  input OrderItemInput {
    menuItemId: ID!
    quantity: Int!
  }

  type Query {
    menu: [MenuItem!]!
    orders: [Order!]!
    activeOrders: [Order!]! # Orders that are "Pending" or "In Progress"
    order(id: ID!): Order
  }

  type Mutation {
    # Admin mutations
    login(username: String!, password: String!): String # Returns auth token
    addMenuItem(name: String!, price: Float!, category: String!, description: String): MenuItem!
    updateMenuItem(id: ID!, name: String, price: Float, category: String, description: String): MenuItem
    removeMenuItem(id: ID!): Boolean
    updateOrderStatus(id: ID!, status: String!): Order

    # Customer mutation
    placeOrder(customerName: String!, items: [OrderItemInput!]!): Order!
  }
`;


// --- GraphQL Resolvers ---
const resolvers = {
  Query: {
    menu: () => menuItems,
    orders: (parent, args, context) => {
        if (!context.isAdmin) throw new Error('Not authorized');
        return orders;
    },
    activeOrders: () => orders.filter(o => o.status === 'Pending' || o.status === 'In Progress'),
    order: (parent, { id }, context) => {
        if (!context.isAdmin) throw new Error('Not authorized');
        return orders.find(o => o.id === id);
    },
  },
  Mutation: {
    // --- Admin Mutations ---
    login: async (_, { username, password }) => {
        const user = users.find(u => u.username === username);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }
        // Return a JWT token
        const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        return token;
    },

    addMenuItem: (_, { name, price, category, description }, context) => {
      if (!context.isAdmin) throw new Error('Not authorized');
      const newItem = {
        id: String(nextMenuItemId++),
        name,
        price,
        category,
        description,
      };
      menuItems.push(newItem);
      return newItem;
    },

    updateMenuItem: (_, { id, name, price, category, description }, context) => {
        if (!context.isAdmin) throw new Error('Not authorized');
        const itemIndex = menuItems.findIndex(item => item.id === id);
        if (itemIndex === -1) return null;
        
        const item = menuItems[itemIndex];
        if(name) item.name = name;
        if(price) item.price = price;
        if(category) item.category = category;
        if(description) item.description = description;

        menuItems[itemIndex] = item;
        return item;
    },

    removeMenuItem: (_, { id }, context) => {
        if (!context.isAdmin) throw new Error('Not authorized');
        const initialLength = menuItems.length;
        menuItems = menuItems.filter(item => item.id !== id);
        return menuItems.length < initialLength;
    },

    updateOrderStatus: (_, { id, status }, context) => {
        if (!context.isAdmin) throw new Error('Not authorized');
        const orderIndex = orders.findIndex(o => o.id === id);
        if (orderIndex === -1) throw new Error('Order not found');
        
        orders[orderIndex].status = status;
        return orders[orderIndex];
    },

    // --- Customer Mutation ---
    placeOrder: (_, { customerName, items }) => {
        if (!items || items.length === 0) {
            throw new Error('Cannot place an empty order.');
        }

        let total = 0;
        const processedItems = items.map(item => {
            const menuItem = menuItems.find(mi => mi.id === item.menuItemId);
            if (!menuItem) {
                throw new Error(`Menu item with ID ${item.menuItemId} not found.`);
            }
            total += menuItem.price * item.quantity;
            return {
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                name: menuItem.name,
                price: menuItem.price,
            };
        });

        const newOrder = {
            id: String(nextOrderId++),
            customerName,
            items: processedItems,
            total: parseFloat(total.toFixed(2)),
            status: 'Pending',
            createdAt: new Date().toISOString(),
        };

        orders.push(newOrder);
        // In a real app with subscriptions, you would publish the new order here
        return newOrder;
    },
  },
};


// --- Server Setup ---
async function startServer() {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true, // Allows GraphQL Playground in production
    });

    await server.start();

    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => {
                // This context function is called for every GraphQL request.
                // It checks for an Authorization header and validates the JWT.
                const auth = req.headers.authorization || '';
                if (!auth.startsWith('Bearer ')) {
                    return { isAdmin: false };
                }
                const token = auth.substring(7, auth.length);
                try {
                    const decoded = jwt.verify(token, JWT_SECRET);
                    // If the token is valid, we add isAdmin=true to the context
                    // This allows our resolvers to check for admin privileges.
                    if (decoded.userId) {
                         return { isAdmin: true, user: decoded };
                    }
                    return { isAdmin: false };
                } catch (err) {
                    // Token is invalid or expired
                    return { isAdmin: false };
                }
            },
        }),
    );

    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();