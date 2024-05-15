const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./api.json')
module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}