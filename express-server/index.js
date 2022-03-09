const express = require('express');
const {engine} = require('express-handlebars');
const app = express(); 

const products = [
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
  { name: 'TV', price: 12.99 },
  {name: 'radio', price: 5.33}, 
]
const emptyProducts = [];
const port = 3000; 

app.engine("hbs", engine({
  extname: 'hbs', 
  defaultLayout: 'index.hbs', 
  partialsDir: __dirname+'/views/partials'
}));

app.set('view engine', 'hbs');
// app.set('views', __dirname+'/templates')

const show = 0; 
app.get('/', (req, res) => { 
  res.render('home.hbs', {show: show===1? true: false, navTitle: "John's App", docTitle: 'Home Page'})
})








app.listen(port, console.log(`server is running on port ${port}`))