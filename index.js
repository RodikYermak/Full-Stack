import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';

import { login, me, register } from './controllers/UserController.js';

mongoose
    .connect(
        'mongodb+srv://RodikYermak:!rODIK123@cluster0.xoyzi5l.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', login);
app.post('/auth/register', registerValidation, register);
app.get('/auth/me', checkAuth, me);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});