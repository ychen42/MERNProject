//bring in express: 
//for building web apps and APIS, standard server framework for Node
const express = require('express');

const connectDB = require('./config/db');
const app = express();


//connect to DB
connectDB();

//Init Middleware
app.use(express.json());

//Deifne routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));


app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



//terminal command:
//npm run server
