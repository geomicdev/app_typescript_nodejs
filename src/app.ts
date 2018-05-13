import express from 'express';
import { json } from 'body-parser';

export const app = express();

app.use(json());

app.get('/', (req,res) => {
    res.send({ success: true, content: '123123213' });
});

