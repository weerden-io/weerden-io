const express = require('express');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static('./frontend/dist/weerden-io'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'frontend/dist/weerden-io/'}),
);

app.listen(process.env.PORT || 8080);
