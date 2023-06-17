const mongo = require('mongoose')

const connectDB = ((url) => {
    return mongo.connect(url,{
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true

})
})

module.exports = connectDB
