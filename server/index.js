const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening at http://localhost:', port)
})
