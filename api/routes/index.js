const bodyParser = require('body-parser')
const routeMovies = require('./movies')
const routeCategories = require('./categories')
const routeNominations = require('./nominations')

module.exports = app => {
    app.use(bodyParser.json())

    app.get('/', (req, res) => res.send({ message : "It's on"}))
    app.use(routeMovies)
    app.use(routeCategories)
    app.use(routeNominations)
}