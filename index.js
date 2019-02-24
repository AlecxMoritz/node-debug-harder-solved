require('dotenv').config();
require('./models/index');

const Express = require('express');
const bodyParser = require('body-parser');
const app = Express()
const routes = require('./routes');

app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT} `)
})