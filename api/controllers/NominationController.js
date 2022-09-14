const database = require('../models')
const { getMovies } = require('./MovieController')

class NominationController {
    static async getNominations(req, res) {
        try {
            const nominations = await database.Nominations.findAll(
                { 
                    include: [
                        { 
                            model: database.Movies, 
                            as: 'Movie'
                        },
                        { 
                            model: database.Categories, 
                            as: 'Category'
                        }
                    ] 
                }
            )

            const nominationsResponse = nominations.map(nomination => (
                {
                    id: nomination.id,
                    nomination: nomination.Category.name,
                    movie: nomination.Movie.name
                }
            ))
                
            return res.status(200).json(nominationsResponse)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async addNomination(req, res) {
        const dataRequest = req.body

        try {
            const nomination = await database.Nominations.create(dataRequest)
            return res.status(200).json(nomination)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateNomination(req, res) {
        const { id } = req.params
        const dataRequest = req.body

        try {
            await database.Nominations.update(dataRequest, { where : { id: Number(id) } } )
            const nomination = await database.Nominations.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(nomination)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteNomination(req, res) {
        const { id } = req.params

        try {
            await database.Nominations.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { message: `Id ${id} deleted!` } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NominationController