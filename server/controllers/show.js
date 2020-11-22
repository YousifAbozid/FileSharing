import fileSchema from '../models/file.js' // file schema

export const showFile = async (req, res) => {
    const file = await fileSchema.findOne({ uuid: req.params.uuid })
    if (!file) {
        return res.status(404).json({ error: 'this file is expired now' })
    } else {
        return res.status(200).json(file)
    }
}