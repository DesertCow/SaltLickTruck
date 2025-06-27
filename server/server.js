/*
* =================================================================
* FOOD TRUCK BACKEND - Node.js, Express, GraphQL (Updated)
* =================================================================
*
* Description:
* This file contains the complete backend server for the Salt Lick
* food truck ordering application. The menu data has been updated
* to match the full menu provided in the frontend application.
* The server port has also been updated to 4001.
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
* 6. The server will start on http://localhost:4001/graphql.
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
const PORT = process.env.PORT || 4002; // Updated port to match frontend

// --- Mock Database (Updated with full menu) ---
let menuItems = [
    // Salt Lick Plates
    { id: 'p1', name: "BRISKET", price: 17.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p2', name: "PORK RIBS", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p3', name: "BISON RIBS (2 Ribs)", price: 24.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p4', name: "BEEF RIBS (2 Ribs)", price: 24.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p5', name: "TURKEY", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p6', name: "SAUSAGE", price: 11.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p7', name: "CHICKEN", price: 13.95, category: "Salt Lick Plates", description: "Whole chicken. Served w/beans, potato salad & coleslaw." },
    { id: 'p8', name: "PULLED PORK", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
    { id: 'p9', name: "THURMAN'S CHOICE", price: 18.95, category: "Salt Lick Plates", description: "Brisket, Pork Ribs & Sausage. No Substitutions." },
    // Combo Plates (Categorized under Salt Lick Plates for grouping)
    { id: 'c1', name: "BRISKET & PORK RIBS", price: 16.95, category: "Salt Lick Plates" },
    { id: 'c2', name: "BRISKET & SAUSAGE", price: 16.95, category: "Salt Lick Plates" },
    { id: 'c3', name: "BRISKET & TURKEY", price: 16.95, category: "Salt Lick Plates" },
    { id: 'c4', name: "PULLED PORK & BRISKET", price: 16.95, category: "Salt Lick Plates" },
    // Meat by the LB
    { id: 'm1', name: "½ LB BRISKET", price: 10.95, category: "Meat by the LB." },
    { id: 'm2', name: "½ LB PORK RIBS", price: 9.00, category: "Meat by the LB." },
    { id: 'm3', name: "½ LB SAUSAGE", price: 5.95, category: "Meat by the LB." },
    { id: 'm4', name: "½ LB TURKEY", price: 8.95, category: "Meat by the LB." },
    { id: 'm5', name: "½ CHICKEN", price: 8.95, category: "Meat by the LB." },
    { id: 'm6', name: "½ LB PULLED PORK", price: 8.45, category: "Meat by the LB." },
    // Sandwiches
    { id: 's1', name: "SLICED OR CHOPPED BEEF", price: 12.95, category: "Sandwiches" },
    { id: 's2', name: "PULLED PORK", price: 10.95, category: "Sandwiches", description: "Topped with coleslaw & spicy bbq sauce." },
    { id: 's3', name: "SAUSAGE", price: 9.95, category: "Sandwiches" },
    { id: 's4', name: "TURKEY", price: 12.95, category: "Sandwiches", description: "Romaine lettuce, tomato, red onions & special sauce." },
    { id: 's5', name: "MARINO'S TRIPLE CHOP", price: 12.95, category: "Sandwiches", description: "Chopped Brisket, Sausage & Ribs." },
    // Small Plates
    { id: 'sp1', name: "BRISKET", price: 10.95, category: "Small Plates", description: "For under 10 & over 65." },
    { id: 'sp2', name: "PORK RIBS", price: 9.95, category: "Small Plates", description: "For under 10 & over 65." },
    { id: 'sp3', name: "SAUSAGE", price: 8.95, category: "Small Plates", description: "For under 10 & over 65." },
    // Sides
    { id: 'sd1', name: "SINGLE SERVING", price: 3.50, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
    { id: 'sd2', name: "1 PINT", price: 4.50, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
    { id: 'sd3', name: "1 QUART", price: 9.00, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
    // BBQ Sauce
    { id: 'bbq1', name: "½ PINT BBQ SAUCE", price: 1.75, category: "Sides", description: "Regular or Spicy" },
    { id: 'bbq2', name: "1 PINT BBQ SAUCE", price: 3.50, category: "Sides", description: "Regular or Spicy" },
    // Desserts
    { id: 'd1', name: "HOMEMADE PECAN PIE", price: 5.95, category: "Desserts" },
    { id: 'd2', name: "CHOCOLATE PECAN PIE", price: 5.95, category: "Desserts" },
    { id: 'd3', name: "BLACKBERRY COBBLER", price: 5.95, category: "Desserts" },
    { id: 'd4', name: "PEACH COBBLER", price: 5.95, category: "Desserts" },
    // Beverages
    { id: 'b1', name: "SWEET/UNSWEET TEA", price: 2.50, category: "Beverages" },
    { id: 'b2', name: "SODA", price: 2.50, category: "Beverages", description: "Coke, Diet Coke, Sprite, Dr. Pepper" },
    { id: 'b3', name: "BOTTLED WATER", price: 2.50, category: "Beverages" },
];

let orders = [
    {
        id: '101',
        customerName: 'John Doe',
        items: [
            { menuItemId: 'p1', quantity: 1, name: 'BRISKET', price: 17.95 },
            { menuItemId: 'b2', quantity: 2, name: 'SODA', price: 2.50 },
        ],
        total: 22.95,
        status: 'Completed', // Pending -> In Progress -> Completed
        createdAt: new Date().toISOString(),
    }
];
let nextOrderId = 102;

// Hardcoded admin user for demonstration
const users = [
    {
        id: 'admin01',
        username: 'admin',
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
    activeOrders: [Order!]!
    order(id: ID!): Order
  }

  type Mutation {
    # Admin mutations
    login(username: String!, password: String!): String
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
        const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        return token;
    },

    addMenuItem: (_, { name, price, category, description }, context) => {
      if (!context.isAdmin) throw new Error('Not authorized');
      const newItem = {
        id: `new-${Math.random().toString(36).substr(2, 9)}`, // Use a random ID for new items
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
        introspection: true,
    });

    await server.start();

    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => {
                const auth = req.headers.authorization || '';
                if (!auth.startsWith('Bearer ')) {
                    return { isAdmin: false };
                }
                const token = auth.substring(7, auth.length);
                try {
                    const decoded = jwt.verify(token, JWT_SECRET);
                    if (decoded.userId) {
                         return { isAdmin: true, user: decoded };
                    }
                    return { isAdmin: false };
                } catch (err) {
                    return { isAdmin: false };
                }
            },
        }),
    );

    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();