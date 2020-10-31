const {server, c} = require('node-web-server-with-stuff')

const options = {/* dev: false, */ public: __dirname+'/front'}

server.run(options)
