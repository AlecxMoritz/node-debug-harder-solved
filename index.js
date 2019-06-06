require('dotenv');
require('./models/index');

const Express = require('express');
const bodyParser = require('body-parser');
const app = Express()
const routes = require('./routes');


routes(app);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT} `)
})