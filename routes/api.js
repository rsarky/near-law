const express = require('express')
const router = express.Router()
const mongojs = require('mongojs')
const db = mongojs('mongodb://rohit:randompass@ds115740.mlab.com:15740/near-law', ['data'])

//Get all records
router.get('/', (req, res) => {
    db.data.find((err, data) => {
        if (err) {
            res.send('Error occurred.')
        } else {
            res.json(data)
        }
    })
})

//Get particular record using citation as key.
router.get('/:citation', (req, res) => {
    console.log(req.params.citation)
    db.data.findOne({ Citation: req.params.citation }, (err, data) => {
        if (err) {
            res.send('Error occurred')
        } else {
            res.send(data)
        }
    })
})

//Edit particular record.
router.put('/:citation', (req, res) => {
    const record = req.body
    let new_record = {}
    for (let prop in record) {
        if (!record.hasOwnProperty(prop)) {
            continue
        }
        if (record[prop]) {
            new_record[prop] = record[prop]
        }
    }
    console.log(new_record)
    res.send(new_record)

})
module.exports = router