var express = require('express');
const app = express();
app.use(express.static('/root/projects/reactjs/web'));
app.listen(3000, "0.0.0.0");
