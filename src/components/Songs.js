import React from 'react';
import SongDetail from './SongDetail';
import { connect } from 'react-redux';
import { getSongs } from '../actions/songs';

class Songs extends React.Component {
  componentDidMount() {
    // no longer just a simple action creator inoraction
    // it's now store.dispatch(getStong())
    this.props.getSongs()
  }

  render() {
    return (
      <div className="Songs">
      <p>Songs</p>
      {this.props.songs ? this.props.songs.map(song => <SongDetail song={song}/>) : 'no songs'}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(mapStateToProps, { getSongs: getSongs })(Songs);
