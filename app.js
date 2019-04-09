var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
const request = require('request');
var api = require('marvel-api');
var hash = require('object-hash');
var config = require('./config.js'); 
var marvel = api.createClient({
	publicKey: config.publicKey,
	privateKey: config.privateKey
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {hero: null, error: null})
});

app.post('/', function(req, res){
  let hero = req.body.hero;
  console.log("before", hero);

  // let hero = "spider-man";
  let ts = Math.floor(Date.now() / 1000);
  let num = [ts, config.publicKey, config.privateKey];
  let hashval = hash(num);
  // console.log("hashval=", hashval);
  let url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${config.publicKey}&hash=${hashval}`

  request(url, function(err,response,body) {
  	marvel.characters.findByName(hero)
	  .then(function(result) {
	  	// console.log("after", hero);
	    console.log('Found character ID', result.data[0].id);
	    return marvel.characters.comics(result.data[0].id);
	  })
	  .then(function(result) {
	    console.log('found %s comics of %s total', result.meta.count, result.meta.total);
	    console.log(result.data[Math.floor(Math.random(result.meta.count))].title);
	    var title = result.data[Math.floor(Math.random(result.meta.count))].title;
	   	res.render('index', {hero: title, error: null})
	  })
	  // .fail(res.render('index', {hero: null, error: 'Error, please try again'}))
	  .fail(console.error)
	  .done();
	});
})



 app.listen(3000, function(){
    console.log('app is running on port 3000')
})