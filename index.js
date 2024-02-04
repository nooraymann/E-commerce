import express from 'express'
import { dbConnection } from './database/dbConnection.js';
import { categoryRouter } from './src/modules/category/category.routes.js';
import bootstrap from './src/modules/index.router.js';
const app = express()
const port = 3200
bootstrap(app,express);
dbConnection();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`E-commerce app listening on port ${port}!`))
