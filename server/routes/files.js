import express from 'express'
import { addFile } from '../controllers/files.js'

const filesRoutes = express.Router()

filesRoutes.post('/', addFile)

export default filesRoutes