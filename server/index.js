const express = require('express');
const path = require('path');
const fetch = require('node-fetch')
const app = express();
// const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client')));


// sidebar nick
app.get('/api/reservations/:id', function (req, res) {
  console.log('hit SIDEBAR NICK fetch', req.params.id);

  fetch(`http://localhost:3001/businesses/${req.params.id}`)
    .then(res => (res.json()))
    .then(json => (res.send(json)));    
})

// photos chris
app.get('/api/photos/:busId', function (req, res) {
  console.log('hit PHOTOS CHRIS fetch', req.params.busId);
  fetch(`http://localhost:3002/businesses/${req.params.busId}`)
    .then(res => (res.json()))
    .then(json => (res.send(json)));    
})

app.get('/api/reviews/restaurants/:restaurantId', function (req, res) {
  console.log('hit RESTAURANTS fetch', req.params.restaurantId);
  fetch(`http://localhost:3003/restaurants/${req.params.restaurantId}`)
    .then(res => {
      // console.log('RES', res);
      return res.json();
    })
    .then(json => {
      // console.log(json)
      return res.send(JSON.stringify(json))
    })
})

app.get('/api/reviews/reviewers', function (req, res) {
  console.log('hit REVIEWERS fetch', req.params.restaurantId);
  fetch('http://localhost:3003/reviewers')
    .then(res => (res.json()))
    .then(json => (res.send(JSON.stringify(json))));    
})

// header brandon
app.get('/api/header/:businessId', function (req, res) {
  console.log('hit HEADER BRANDON fetch', req.params.businessId);
  fetch(`http://localhost:3004/business/${req.params.businessId}`)
    .then(res => (res.json()))
    .then(json => (res.send(JSON.stringify(json))));    
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});