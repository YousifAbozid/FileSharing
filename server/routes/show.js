import express from 'express'
import { showFile } from '../controllers/show.js'

const showRoutes = express.Router()

showRoutes.get('/:uuid', showFile)

export default showRoutes