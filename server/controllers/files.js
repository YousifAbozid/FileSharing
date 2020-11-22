import multer from 'multer' // for more info about multer, just check out their docs from here: https://github.com/expressjs/multer
import path from 'path' // for using path module, check the docs from here: https://nodejs.org/api/path.html
import fileSchema from '../models/file.js' // file schema
import { v4 as uuidv4 } from 'uuid' // this is for generating unique id
import sendMail from '../services/emailService.js' // to send an email via nodemailer library
import emailTemplate from '../services/emailTemplate.js'

// use diskStorage to save the files in upload folder in the root of the server
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`
        cb(null, uniqueName)
    }
})

// this below used for uploading files and save it to the storage above
// again for more info about multer and how it works just check the docs from here: https://github.com/expressjs/multer
let upload = multer({
    storage,
    limits: { fieldSize: 1000000 * 100 }
}).single('myfile')

export const addFile = (req, res) => {
    // for now I guess there is no need to use try/catch block, maybe I remove it later
    try {
        // upload file
        upload(req, res, async (error) => {
            // validate request
            if (!req.file) {
                return res.json({ error: 'All fields required' })
            }

            if (error) {
                return res.status(500).send({ error: error.message })
            }
            // save to database
            // 1) create file
            const file = new fileSchema({
                filename: req.file.filename,
                uuid: uuidv4(),
                path: req.file.path,
                size: req.file.size
            })
            // 2) save it to the database
            const response = await file.save()
            return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` })
            // for now the file doesn't actualy upload to the database but it store itself in upload folder in the root of the server
        })

    } catch (error) {
        console.log(error)
    }
}

export const sendFile = async (req, res) => {
    const { uuid, emailTo, emailFrom } = req.body
    // validate request
    if (!uuid || !emailTo || !emailFrom) {
        return res.status(422).send({ error: 'All fields required' })
    }
    // get data from database
    const file = await fileSchema.findOne({ uuid: uuid })
    if (file.sender) {
        return res.status(422).send({ error: 'Email already sent' })
    }

    file.sender = emailFrom
    file.receiver = emailTo
    const response = await file.save()

    // send e-mail
    sendMail({
        from: emailFrom,
        to: emailTo,
        subject: 'file sharing',
        text: `${emailFrom} shared a file with you.`,
        html: emailTemplate({
            emailFrom: emailFrom,
            downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
            size: parseInt(file.size / 1000) + ' KB',
            expires: '24 hours'
        })
    })

    return res.send({ success: true })
}