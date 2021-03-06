import {connect} from 'react-redux';
import Stations from '../components/Stations';

function convertSongsToStations(songsArray) {

  let stations = {};

  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  console.log(stations);

  return stations;
}

const mapStateToProps = (state, ownProps) => ({
  stations: convertSongsToStations(state.songs)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
