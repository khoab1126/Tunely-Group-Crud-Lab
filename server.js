// SERVER-SIDE JAVASCRIPT
//git test
//require express in our app
var express = require('express');
// require dependencies
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var findOrCreate = require('mongoose-findorcreate');
var router = express.Router();





// generate a new express app and call it 'app'
var app = express();
db = require('./models');
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/


/* hard-coded data */
var albums = [];
albums.push({
              _id: 132,
              artistName: 'Nine Inch Nails',
              name: 'The Downward Spiral',
              releaseDate: '1994, March 8',
              genres: [ 'industrial', 'industrial metal' ]
            });
albums.push({
              _id: 133,
              artistName: 'Metallica',
              name: 'Metallica',
              releaseDate: '1991, August 12',
              genres: [ 'heavy metal' ]
            });
albums.push({
              _id: 134,
              artistName: 'The Prodigy',
              name: 'Music for the Jilted Generation',
              releaseDate: '1994, July 4',
              genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
            });
albums.push({
              _id: 135,
              artistName: 'Johnny Cash',
              name: 'Unchained',
              releaseDate: '1996, November 5',
              genres: [ 'country', 'rock' ]
            });



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api/albums', function api_index (req, res){
  db.Album.find(function (err, albums) {
    if (err) {
      console.log('index error:' + err);
      res.sendStatus(500);
    }
    res.json(albums);
  });
});
//get one album
app.get('/api/:id', function (req, res) {
  //get album id from params
  let albumId = req.params.id;

  db.Album.find(function (err, albums) {
    if (err) {
      console.log('index error:' + error);
      res.sendStatus(500);
    }
    for (var i = 0; i < albums.length; i++) {
      if (albums[i]._id == albumId) {
        res.json(albums[i]);
        break;
      }
    }
  });
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('---Express server is running on http://localhost:3000/---');
});
