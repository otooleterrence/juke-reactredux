import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({playlists: state.playlists.list})

export default connect(mapStateToProps)(Sidebar)

// export default class extends Component {
//
//   constructor() {
//     super();
//     this.state = store.getState().playlists;
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().playlists);
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     return (
//       <Sidebar playlists={this.state.list}/>
//     );
//   }
//
// }
