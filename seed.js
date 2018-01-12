// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumsList =[
  {
    artistName: 'Led Zeppelin',
    name: 'Led Zeppelin IV',
    releaseDate: 'November 8, 1971',
    genres: ['Rock', 'Metal']
  }
  // put data here!
];

db.Album.remove({}, function(err, albums){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all albums');

  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });
}
});
