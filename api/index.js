// JavaScript source code
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')


const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
const assert = require('assert')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*
app.get('/', async function (req, res) {
  try {
    let resData
    const client = new MongoClient(fullUri, { useNewUrlParser: true })
    client.connect( async function (err) {
      const collection = client.db(dbname).collection(collectionName)
      // perform actions on the collection object
      resData = await collection.find()
      //console.log(await collection.find().toArray())
      client.close()
    });


    //const resData = await collection.find()

    res.send(resData)

  } catch (e) {
    console.log(e.message)
  }
})
*/
app.get('/m/newArrive', async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.URI)
    const collection = client.db(process.env.DBNAME).collection(process.env.COLLECTION)

    if (collection) {
      const responseData = await collection.find().sort({ '_id': -1 }).limit(8).map(function (u) { return { 'id': u._id, 'name': u.name, 'price': u.price }; }).toArray()
      //console.log(responseData);
      if (responseData)
        res.send(JSON.stringify(responseData))
      else
        res.sendStatus(404)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error.message)
  }
})

app.get('/m/product', async (req, res) => {
  var id = req.query.id
  try {
    const client = await MongoClient.connect(process.env.URI)
    const collection = client.db(process.env.DBNAME).collection(process.env.COLLECTION)

    if (collection) {
      const responseData = await collection.find({ '_id': new ObjectId(id) }).toArray()
      if (responseData)
        res.send(JSON.stringify(responseData))
      else
        res.sendStatus(404)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error.message)
  }
})

app.get('/m/productsFromType', async (req, res) => {
  var type = req.query.type
  var quantity = req.query.quantity ? req.query.quantity : 0
  try {
    const client = await MongoClient.connect(process.env.URI)
    const collection = client.db(process.env.DBNAME).collection(process.env.COLLECTION)

    if (collection) {
      var responseData
      if (quantity > 0) {
        responseData = await collection.find({ 'type': type }).sort({ '_id': -1 }).limit(8).map(function (u) { return { 'id': u._id, 'name': u.name, 'price': u.price }; }).toArray()
      } else {
        responseData = await collection.find({ 'type': type }).sort({ '_id': -1 }).map(function (u) { return { 'id': u._id, 'name': u.name, 'price': u.price }; }).toArray()
      }

      if (responseData)
        res.send(JSON.stringify(responseData))
      else
        res.sendStatus(404)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error.message)
  }
})


// Export the server middleware
module.exports = app
