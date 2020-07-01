const express = require('express');

const app = express();

app.use(express.static('./dist/weerden-io'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/weerden-io/'}),
);

app.listen(process.env.PORT || 8080);
