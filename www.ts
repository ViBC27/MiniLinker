import http from 'http';
import app from './index';

const port = 3000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Active in ${port}`));
