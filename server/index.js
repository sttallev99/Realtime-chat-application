const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
require('dotenv').config();

const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({welcomeString: 'Welcome to our chat app APIs'})
});

app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute)

const port = process.env.PORT;

mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB CONNECTED!'))
    .then(() => app.listen(port, () => console.log('Server is running on port: ' + port)))
    .catch((err) => console.log(err));

