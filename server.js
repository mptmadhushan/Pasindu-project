const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

//connect myFirstDatabase
connectDB();

//Init middleware
app.use(express.json({ extended: false }));



app.use(
    cors({
        origin: true,
        credentials: true,
        optionsSuccessStatus: 200
    }))


app.get('/', (req, res) => res.send('API Running'));

//Define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/location', require('./routes/api/location'));
app.use('/api/subject', require('./routes/api/subject'));
app.use('/api/assignment', require('./routes/api/assignment'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));