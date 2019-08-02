import React from 'react';
import SongDetail from './SongDetail';

class Songs extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="Songs">
      {this.props.songs ? this.props.songs.map(song => <SongDetail song={song}/>) : 'no songs'}
      </div>
    );
  }
}

export default Songs;
