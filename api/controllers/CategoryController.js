const database = require('../models')

class CategoryController {
    static async getCategories(req, res) {
        try {
            const categories = await database.Categories.findAll()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getCategory(req, res) {
        const { id } = req.params

        try {
            const category = await database.Categories.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async addCategory(req, res) {
        const dataRequest = req.body

        try {
            const category = await database.Categories.create(dataRequest)
            return res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateCategory(req, res) {
        const { id } = req.params
        const dataRequest = req.body

        try {
            await database.Categories.update(dataRequest, { where : { id: Number(id) } } )
            const category = await database.Categories.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(category)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteCategory(req, res) {
        const { id } = req.params

        try {
            await database.Categories.destroy( { where: { id: Number(id) } } )
            return res.status(200).json( { message: `Id ${id} deleted!` } )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CategoryController