import express from 'express';
import bodyParser from 'body-parser';
import chatRouter from './routes/chatbot.route';

const app = express();

app.use(bodyParser.json());
app.use('/api', chatRouter);

export default app;
