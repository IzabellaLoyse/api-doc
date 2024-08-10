const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUiExpress = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/customers', (req, res) => {
  res.send('Customers created');
});

app.get('/customers', (req, res) => {
  res.send('Customers list');
});

app.use(
  '/api/docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocs),
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
