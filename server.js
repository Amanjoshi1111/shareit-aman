const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
//connnecting server with database
const connectDB = require('./config/db');
connectDB();


//cors
const corsOptions = {
    // ['http://localhost:3000', 'http://localhost:3000', 'http://localhost:3000']
    origin: process.env.ALLOWED_CLIENTS.split(',')
}

app.use(cors(corsOptions));

//template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.use('/', require("./routes/mainPage"));
app.use('/api/files', require("./routes/files"));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})