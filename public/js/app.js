/* Mod A, Sprint 1
-edit the function renderAlbum to display one Album on the page. You should use HTML just like what you just deleted.
-Build-up the HTML string and use jQuery to render it onto the page. */

///////
/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
<<<<<<< HEAD

=======

>>>>>>> 7d2175e24a1025d9fe8ef5c138dbcc238a319480
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
