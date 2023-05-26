const express = require('express')


const dotenv = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
app.use(express.static(__dirname + "/public/"))
const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con =>  {
    console.log('DB connection successful')
})

const nameSchema = new mongoose.Schema({
    seatNo: Number,
    status: String
})

const Seat = mongoose.model('Seat', nameSchema)

app.get('/bookSeat', (req, res) => {
    async function displaySeats() {Seat.find({ status:"vacant"}, "seatNo status", (err, seats) => {
        for(var i=1; i<=seats.length; i++) {    
            console.log("Room no. " + seats[i-1].seatNo + " is available")
        }
    })
}
displaySeats()
})
app.post('/bookSeat', (req, res) => {
    async function bookSeat() {rl.question("these rooms are empty which room do you want to book? ", function(number) {
        console.log(`We are booking room number ${number} for you`)   
        Seat.updateOne({seatNo:number},{ $set: {status:"booked"}}, function(err, res) {
            if(err) throw err
            console.log("your room has been booked!")
        })
        rl.close()
    })
}
bookSeat()
}) 

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})
