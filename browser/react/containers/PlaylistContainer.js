
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  console.log('----state.playlists', state.playlists)
  return {

    selectedPlaylist: state.playlists.list,
    player: state.player
  }
}

let mapDispatchToProps = (dispatch) => ({toggleOne: function(song, songs) { dispatch(toggleSong(song, songs)) }})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

// export default class extends Component {
//
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }
//
//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }
//
// }
