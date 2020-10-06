import * as express from 'express';
import * as enforce from 'express-sslify';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4300;

app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/frontend/dist/weerden-io`));
if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({trustProtoHeader: true}));
}

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: `${process.cwd()}/frontend/dist/weerden-io`});
});

const testResponse = ['test api route!'];
app.get('/api/test', (req, res) => {
  res.json(testResponse);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

