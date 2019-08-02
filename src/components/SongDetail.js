import React from 'react';

function SongDetail ({ song }) {
  return (
    <div className="SongDetail">
      Song Details
      <h1>{song.title}</h1>
      <p>Artist: {song.artist}</p>
      <p>Length: {song.length}</p>
    </div>
  );
}

export default SongDetail;
