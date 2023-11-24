const Options = require("../models/options")

const getAllOptions = async(req, res, next) => {
    try {
        let allOptions = await Options.find({})
        res.status(200).json(allOptions)
    }
    catch(error) {
        next(error)
    }
}

const getExistenciales = async (req, res, next) => {
    const type = "Existenciales"
    try {
        let options = await Options.find({type: { $in: type }})
        function shuffleArray(o){
            o.sort(()=> Math.random() - 0.5);
        }
        const filteredOptions = await Options.find({type: { $in: type }})
        shuffleArray(filteredOptions)
        res.status(200).json({options, filteredOptions})
        }
    catch (error) {
        next(error)
    }
} 

const getAbsurdas = async (req, res, next) => {
    const type = "Absurdas"
    try {
        let options = await Options.find({type: { $in: type }})
        function shuffleArray(o){
            o.sort(()=> Math.random() - 0.5);
        }
        const filteredOptions = await Options.find({type: { $in: type }})
        shuffleArray(filteredOptions)
        res.status(200).json({options, filteredOptions})
        }
    catch (error) {
        next(error)
    }
} 

const getMas18 = async (req, res, next) => {
    const type = "+18"
    try {
        let options = await Options.find({type: { $in: type }})
        function shuffleArray(o){
            o.sort(()=> Math.random() - 0.5);
        }
        const filteredOptions = await Options.find({type: { $in: type }})
        shuffleArray(filteredOptions)
        res.status(200).json({options, filteredOptions})
        }
    catch (error) {
        next(error)
    }
} 

module.exports = {
    getAllOptions,
    getExistenciales,
    getAbsurdas,
    getMas18
}