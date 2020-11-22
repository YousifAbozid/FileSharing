import fileSchema from '../models/file.js' // file schema

export const downloadFile = async (req, res) => {
    const file = await fileSchema.findOne({ uuid: req.params.uuid })
    if (!file) {
        return res.status(404).json({ error: 'this file is expired now' })
    }

    const filePath = `${file.path}`
    res.download(filePath)
}