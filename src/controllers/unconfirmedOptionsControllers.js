const UnconfirmedOptions = require("../models/unconfirmedOptions")
const Options = require("../models/options")

const getUnconfirmedOptions = async(req, res, next) => {
    try {
        let allUnconfirmedOptions = await UnconfirmedOptions.find({})
        res.status(200).json(allUnconfirmedOptions)
    }
    catch(error) {
        next(error)
    }
}

const postUnconfirmedOptions = async(req, res) => {
    try {
        const { firstOption, secondOption, type } = req.body
        
        if(firstOption.text.length < 4) return res.status(400).json({message: "Debe tener un mínimo de 4 caracteres!"})
        if(firstOption.text.length > 100) return res.status(400).json({message: "Debe tener un máximo de 100 caracteres!"})
        if(secondOption.text.length < 4) return res.status(400).json({message: "Debe tener un mínimo de 4 caracteres!"})
        if(secondOption.text.length > 100) return res.status(400).json({message: "Debe tener un máximo de 100 caracteres!"})

        const unconfirmedOptions = new UnconfirmedOptions ({
            firstOption,
            secondOption,
            type
        })
        unconfirmedOptions.save()
        res.status(200).json(unconfirmedOptions)
    } catch (error) {
        console.log(error)
    }
}

const removeUnconfirmedOptions = async (req, res, next) => {
    try {
        const { _id } = req.params
        let unconfirmedOptions = await UnconfirmedOptions.findOne({_id})
        await unconfirmedOptions.remove()
        res.status(200).send({message: "Eliminada!"})
    }
    catch(error) {
        next(error)
    }
}

module.exports = {
    getUnconfirmedOptions,
    postUnconfirmedOptions,
    removeUnconfirmedOptions,
}