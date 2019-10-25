const movies = require('../model/movies.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(movies)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 4 || id <= 0) {
        res.redirect(301, "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/1.-Pixar-Animation-Studios-Google-Chrome.png") 
    }
    res.status(200).send(movies.find(item => item.id == id))
}