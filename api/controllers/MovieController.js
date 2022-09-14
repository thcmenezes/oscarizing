const database = require('../models')

class MovieController {
    static async getMovies(req, res) {
        try {
            const movies = await database.Movies.findAll()
            return res.status(200).json(movies)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getMovie(req, res) {
        const { id } = req.params

        try {
            const movie = await database.Movies.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async addMovie(req, res) {
        const dataRequest = req.body

        try {
            const movie = await database.Movies.create(dataRequest)
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMovie(req, res) {
        const { id } = req.params
        const dataRequest = req.body

        try {
            await database.Movies.update(dataRequest, { where : { id: Number(id) } } )
            const movie = await database.Movies.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(movie)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMovie(req, res) {
        const { id } = req.params

        try {
            await database.Movies.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { message: `Id ${id} deleted!` } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MovieController