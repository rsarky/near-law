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
    // db.data.findAndModify({
    //     query: { Citation: new_record.citation },
    //     update: {
    //         $set: {
    //             tribunal: new_record.tribunal,
    //             Judge_name: new_record.Judge_name,
    //             Court: new_record.Court,
    //             citedNo: new_record.citedNo,
    //             cases_cited: new_record.cases_cited,
    //             Citation: new_record.Citation,
    //             Case_No: new_record.Case_No,
    //             Adv_respondent: new_record.Adv_respondent,
    //             Petitioner: new_record.Petitioner,
    //             judgement: new_record.judgement,
    //             Date: new_record.Date,
    //             Respondent: new_record.Respondent,
    //             fileurl: new_record.fileurl,
    //             HeadNote_keywords: new_record.HeadNote_keywords,
    //             decision: new_record.decision,
    //             Adv_petitioner: new_record.Adv_petitioner
    //         }
    //     }
    // },(err, data) => {
    //     if(err) {
    //         console.log(err)
    //         res.send('Error occurred')
    //     }
    //     else {
    //         console.log(data)
    //         res.send(data)
    //     }
    // })
    db.data.update({Citation:new_record.Citation}, new_record, (err,data)=> {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else {
            console.log(data)
            res.send(new_record)
        }
    })
})
module.exports = router