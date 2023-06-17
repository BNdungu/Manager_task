const not_found = (req,res) => res.status(404).send('Route couldn\'t be found')

module.exports = not_found