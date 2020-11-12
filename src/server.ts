import morgan from 'morgan';
import express from 'express';
import routes from './routes';
import './database/connection';
import path from 'path';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3000, () => console.log('Active in 3000'));
