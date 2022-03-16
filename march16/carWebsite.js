const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/addcar', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'carRegistration.html');
  res.sendFile(completePath);
});
app.get('/showcars', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'showCars.html');
  res.sendFile(completePath);
});
app.get('/login', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'login.html');
  res.sendFile(completePath);
});
app.post('/success', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let result = '';
  if (username == 'smith' && password == 'abc') {
    result = 'user is successfully logged in';
  } else {
    result = 'user is not logged in';
  }
  let htmlResonse = `<style>
      .card{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      h1{
        color:rgb(0, 0, 95);
        font-weight: 600;
      }
      </style>
      <div class="card">
      <h1>${result}<h1>
      </div>`;
  res.send(htmlResonse);
});
app.listen(3001);
console.log('Program Started.Listening to port 3001');
