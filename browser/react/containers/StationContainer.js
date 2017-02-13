import {connect} from 'react-redux';
import Station from '../components/Station';
import {toggleSong} from '../action-creators/player';
import {convertSong} from '../utils.js'


// function convertSongsToStations(songsArray) {
//
//   let stations = {};
//
//   songsArray.forEach(song => {
//     const genre = song.genre;
//     stations[genre] = stations[genre] || [];
//     stations[genre].push(song);
//   });
//
//   console.log(stations);
//
//   return stations;
// } QUESTION:do we still need this?????

const mapStateToProps = (state, ownProps) => {



  let convertedSongs = state.songs.map( (elem) => { return convertSong(elem)} )

  return { genreName: ownProps.params.genreName,
  currentSong: state.player.currentSong,
  // toggle: state.toggle,
  isPlaying: state.player.isPlaying,
  songs: convertedSongs.filter((elem) => elem.genre === ownProps.params.genreName)
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({

  toggle: function(song, songs) { dispatch(toggleSong(song, songs)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Station);
