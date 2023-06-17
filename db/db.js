const mongo = require('mongoose')

//const url = 'mongodb+srv://ngangandungu:ndungu11@cluster0.6x2tkdu.mongodb.net/?retryWrites=true&w=majority'

const connectDB = ((url) => {
    return mongo.connect(url,{
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true

})
})

module.exports = connectDB