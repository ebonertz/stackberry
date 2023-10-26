const express = require('express')
const app = express()
const axios = require('axios')

app.get('/', function (req, res) {
  res.send('This is Stackberry')
})

const baseurl = "https://jsonplaceholder.typicode.com/"

app.get('/posts', async function (req, res) {
  const response = await axios.get(baseurl + "posts", {
    params: {
      limit: limit || 5
    }
  });
  res.send(response.data);
});

app.get('/posts/1', async function (req, res) {
  const response = await axios.get(baseurl + "posts/1");
  console.log(response)
  res.send(response.data);
});

app.listen(3000);