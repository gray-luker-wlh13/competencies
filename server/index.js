const express = require('express'),
      port = 4200,
      app = express();

app.use(express.json());

app.listen(port, () => console.log(`App running on port ${port}`))