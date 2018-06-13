var playlist = { LDR: "White Mustang" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.Alison = 'Slowdive';
  playlist.Sometimes = 'My Bloody Valentine';
  
  updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
  
  return playlist
}