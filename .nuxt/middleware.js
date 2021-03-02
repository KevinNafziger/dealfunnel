const middleware = {}

middleware['load-initial-data'] = require('..\\middleware\\load-initial-data.js')
middleware['load-initial-data'] = middleware['load-initial-data'].default || middleware['load-initial-data']

middleware['user-agent'] = require('..\\middleware\\user-agent.js')
middleware['user-agent'] = middleware['user-agent'].default || middleware['user-agent']

middleware['visit'] = require('..\\middleware\\visit.js')
middleware['visit'] = middleware['visit'].default || middleware['visit']

export default middleware
