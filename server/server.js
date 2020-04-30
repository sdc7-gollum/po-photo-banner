const express = require('express');
const port = 9800;
app = express();
app.listen(port, (err, res) => {
  if (err) {
    console.log(`Error starting up server`);
  } else {
    console.log(`Server now hosted on http://127.0.0.1:${port}`);
  }
});

app.use('/', express.static('public'));
app.use(express.urlencoded());