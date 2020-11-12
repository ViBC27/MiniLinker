import morgan from 'morgan';
import express from 'express';
import routes from './routes';
import './database/connection';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Active in 3000'));
