const Students = require('../models/studentmodel')

/**
 * @name Get All Studnets
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */
const getAllStudents = async (req, res) => {

    let students = await Students.find()
    res.render('index', { students })
}

/**
 * @name Show & Get Single Student
 * @param {*} req 
 * @param {*} res 
 */
const getSingle = async (req, res) => {

    let singleData = await Students.findById(req.params.id)

    res.render('showsingle', {singleData})
}

const showForm = (req, res) => {
    res.render('createstudent')
}

/**
 * @param {*} req 
 * @param {*} res 
 * @name create student
 * @access Public
 */
const createStudent = (req, res) => {

    Students.create({
        ...req.body,
        photo : req.file.filename
    })

    res.redirect('students')
}

const updateDataShow = async (req, res) => {
    
    let stuData = await Students.findById(req.params.id)

    res.render('update', {stuData})
}

const updateData = async (req, res) => {
    let fileName = req.body.old_photo

    if(req.file) {
        fileName = req.file.fileName
    }
    await Students.findByIdAndUpdate(req.params.id, {
        ...req.body,
        photo : fileName
    }, {
        new : true
    })
    res.redirect('students')
}

const deleteSingle = async (req, res) => {
    let deleteData = await Students.findByIdAndDelete(req.params.id)
    console.log(req.body);
    res.render('students')
}


module.exports = {
    getAllStudents,
    getSingle,
    createStudent,
    showForm,
    updateDataShow,
    updateData,
    deleteSingle
}