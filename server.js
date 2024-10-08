const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoute'); // Import user routes
const customerRoutes = require('./src/routes/customerRoutes');


const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://Kalpesh/KalpeshVypar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Define a route to handle form submissions or API requests
app.get('/submit', (req, res) => {
    // Simulate some data processing
    const data = { example: 'This is some example data' };
    console.log('Data received:', data);
    res.json({ message: 'Data received successfully!', data });
});


// Body parser middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import userRoutes from './src/routes/userRoutes.js'; // Import user routes
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const app = express();
// const PORT = 3000;

// // Enable CORS
// app.use(cors());

// const firebaseConfig = {
//     apiKey: "AIzaSyBdixdLZwvBkNpX9_5PVNL8M_5l_UYqdWQ",
//     authDomain: "food-app-with-admin-pane-13650.firebaseapp.com",
//     projectId: "food-app-with-admin-pane-13650",
//     storageBucket: "food-app-with-admin-pane-13650.appspot.com",
//     messagingSenderId: "649971374556",
//     appId: "1:649971374556:web:17179be2ab4cfb0d049719",
//     measurementId: "G-7XN5GJF0JK"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);

// // Body parser middleware
// app.use(bodyParser.json());

// app.use('/api/user', userRoutes);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// export default firestore;
