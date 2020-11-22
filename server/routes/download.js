import express from 'express'
import { downloadFile } from '../controllers/download.js'

const downloadRoutes = express.Router()

downloadRoutes.get('/:uuid', downloadFile)

export default downloadRoutes