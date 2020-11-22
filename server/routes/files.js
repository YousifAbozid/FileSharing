import express from 'express'
import { addFile, sendFile } from '../controllers/files.js'

const filesRoutes = express.Router()

filesRoutes.post('/', addFile)
filesRoutes.post('/send', sendFile)

export default filesRoutes