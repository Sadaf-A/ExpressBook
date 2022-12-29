const express = require('express')
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
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

async function addData() {
    for(var i=1; i<=500; i++) {
         
        const newKey = {
            seatNo: i,
            status:"vacant"
        }
        const myData = new Seat(newKey)
        await myData.save()
            .then(item => {
                console.log(`Seat no. ${i} saved to database`)
            })
            .catch(err => {
                res.status(400).send("unable to save to db")
            })
        }
        }
addData()
