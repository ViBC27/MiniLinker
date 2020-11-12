import morgan from 'morgan';
import express from 'express';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/', (_request, response) => {
  response.send({ Mini: 'Linker' });
});

export default app;
