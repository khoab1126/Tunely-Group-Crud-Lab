/* Mod A, Sprint 1
-edit the function renderAlbum to display one Album on the page. You should use HTML just like what you just deleted.
-Build-up the HTML string and use jQuery to render it onto the page. */

///////
/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.

 */

/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
            artistName: 'Led Zeppelin',
            name: 'Led Zeppelin IV',
            releaseDate: 'November 8, 1971',
            genres: ['Rock', 'Metal']
           });
sampleAlbums.push({
            artistName: 'NoBunny',
            name: 'First Blood',
            releaseDate: 'September 21, 2010',
            genres: ['Garage Rock, Punk Rock, Power Pop']
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
// sampleAlbums.forEach(renderAlbum)////got rid of because it was rendering all albums multiple times, for a total of
//16 albums instead of 4
renderAlbum(sampleAlbums)
})

//////////MUCHO help from Lily. Could not have done this without her
$('#addNewAlbum').on('submit', (e) => { //event handler for button
  e.preventDefault(); //prevent default action of event from being triggered
  $.ajax({
    method: 'POST',
    url: '/api/albums', //what allows the ajax and post to communicate
    data: { //data is the "body" that Req.body refers to on server file
      name: e.currentTarget["1"].value,
      artistName: e.currentTarget["2"].value,   /
      releaseDate: e.currentTarget["3"].value,
      genres: e.currentTarget["4"].value.split(',')
    },
    success: newAlbumSuccess,  //called from functions below
    error: newAlbumError
  });
});
const newAlbumSuccess = (json)=>{  //renders json format
      $('#myform')[0].reset();  //resets the form to blank inputs
      allAlbums.push(json); //new album pushed to allAlbums array as json
}

const newAlbumError = ()=> {
     console.log('Error, try again')
}
// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  for (let i = 0; i < sampleAlbums.length; i++) {
  var albumHtml =
  "        <!-- one album -->" +
  // "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + sampleAlbums[i].name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" + sampleAlbums[i].artistName + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + sampleAlbums[i].releaseDate + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";

  // render to the page with jQuery
  $('#albums').append(albumHtml);

}
}



  // capture form values
  const captureValues = () => {
     var vals = $( 'form' ).serialize();
    console.log(vals);
  }
