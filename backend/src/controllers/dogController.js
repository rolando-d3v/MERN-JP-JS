const dogModel = require('../models/dogModel');

exports.createDog = async (req, res) => {
    try {
      const dog = new dogModel({
        name: req.body.name,
        raza: req.body.raza,
        precio: req.body.precio,
        description: req.body.description,
        filename: req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        url: '/upload/'+ req.file.filename,
        size: req.file.size,
      }) 
      console.log(dog);
      await dog.save()
      res.json({ok: true, message: 'dog created successfully'})
    } catch (error) {
        res.json({ok: false, error})
    }
}


exports.getDogs_all = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit) || 10
        let page = parseInt(req.query.page) || 1
        const dog = await dogModel.paginate({}, {limit, page})
        res.json(dog)
    } catch (error) {
        res.json({ok: false, error})
    }
}


exports.getDog = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({ok: false, error})
    }
}

exports.updateDog = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({ok: false, error})
    }
}


exports.deleteDog = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({ok: false, error})
    }
}