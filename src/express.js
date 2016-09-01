var express = require('express');
const app = express();
app.use(express.static('~/projects/reactjs/web'));
app.listen(3000, "0.0.0.0");
