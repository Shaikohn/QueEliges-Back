const Options = require("../models/options")
const UnconfirmedOptions = require("../models/unconfirmedOptions")
const User = require("../models/user")

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

const postOptions = async(req, res) => {
    try {
        const { firstOption, secondOption, type, user } = req.body
        const options = new Options ({
            firstOption,
            secondOption,
            type,
            user
        })
        options.save()
        let unconfirmedOptions = await UnconfirmedOptions.findOne({_id})
        await unconfirmedOptions.remove()
        const userDb = await User.findOne({name: user})
        user.options = userDb.options.concat(options._id)
        userDb.save()
        res.status(200).json(options)
    } catch (error) {
        console.log(error)
    }
}

const postAdminOptions = async(req, res) => {
    try {
        const { firstOption, secondOption, type } = req.body
        if(type.length < 1) return res.status(400).json({message: "Elige una sección!"})
        if(text.length < 4) return res.status(400).json({message: "Debe tener un mínimo de 4 caracteres!"})
        if(text.length > 200) return res.status(400).json({message: "Debe tener un máximo de 200 caracteres!"})
        const options = new Options ({
            firstOption,
            secondOption,
            type
        })
        options.save()
        res.status(200).json(options)
    } catch (error) {
        console.log(error)
    }
}

const removeOptions = async (req, res, next) => {
    try {
        const { _id } = req.params
        let options = await Options.findOne({_id})
        await options.remove()
        res.status(200).send({message: "Eliminado correctamente!"})
    }
    catch(error) {
        next(error)
    }
}

const removeUserOptions = async (req, res, next) => {
    try {
        const { _id, user } = req.params
        let options = await Options.findOne({_id})
        const userDb = await User.findOne({name: user})
        const optionId = options._id.toString()
        userDb.options = userDb.options.filter((u) => u._id.toString() !== optionId)
        await options.remove()
        userDb.save()
        res.status(200).send({message: "Eliminado correctamente!"})
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getAllOptions,
    getExistenciales,
    getAbsurdas,
    getMas18,
    postOptions,
    postAdminOptions,
    removeOptions,
    removeUserOptions
}