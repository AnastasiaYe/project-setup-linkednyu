
const server = require('./app')
const mongoose = require('mongoose')

// which port to listen for HTTP(S) requests
const port = 5000

//connect to database

mongoose.connect(process.env.CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => server.listen(port, function () {
    console.log("connected to db");
    console.log(`Server running on port: ${port}`)
  }))
  .catch((error) => console.log(error.message))


// call a function to start listening to the port
// const listener = server.listen(port, function () {
//   console.log(`Server running on port: ${port}`)
// })

// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}

