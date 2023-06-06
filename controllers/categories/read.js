import Category from "../../models/Category.js";

export default async (req, res) => {
    try {
        let all = await Category.find()
        if (all) {
            return res.status(200).json({
                response: all,
                message: 'categories found'
            })
        }else {
            return res.status(400).json({
                response:null,
                message: 'categories not found'

            })
        }
    } catch (error) {
        return res.status(500).json({
            response: null,
            message: 'error'

        })

    }
}