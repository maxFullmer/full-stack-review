require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const {login, register, logout, userSession} = require('./controllers/authController.js');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    console.log('connected to db')
    app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 3600 * 24 * 14 //two weeks, a fortnight
    }
}))

// auth
app.post('/api/login', login);
app.post('/api/register', register);
app.get('/api/logout', logout);
app.get('/api/user_session', userSession);

// kill Count
app.get('/api/users');
app.put('/api/distance');
app.put('/api/kill_User');
app.delete('/api/obliterate');


app.listen(SERVER_PORT, () => console.log(`Listening on server port ${SERVER_PORT}`))