const express = require('express')
const multer = require('multer')
const { getAllStudents, createStudent, getSingle, showForm, deleteSingle, updateDataShow, updateData } = require('../controllers/studentscont')
const router = express.Router()

// Multer Management
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, `assets/upload/`)
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
// Uploading Multer System
const upload = multer({

    storage : storage

}).single('photo')

router.delete('/:id', deleteSingle)
router.get('/', getAllStudents)
router.post('/', upload, createStudent)
router.get('/create', showForm)
router.get('/:id', getSingle)
router.get('/update/:id', updateDataShow)
router.put('/update/:id', upload, updateData)

module.exports = router