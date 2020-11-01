// require('node-web-server-with-stuff').server.run()

const {server, up2, c} = require('node-web-server-with-stuff')

const options = {/* dev: false, port: 3003, */ public: __dirname+'/front'}

server.run(options)
