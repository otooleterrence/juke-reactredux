



import React from 'react';
import Songs from './Songs';


export default function (props) {

  const playlist = props.selectedPlaylist;

  // return { genreName: ownProps.params.genreName,
  // currentSong: state.currentSong,
  // toggle: state.toggle,
  // isPlaying: state.isPlaying,
  // songs: state.songs.filter((elem) => elem.genre === ownProps.params.genreName)
  // }

  console.log('----------props.songs in station.js',props.songs);

  return (
    <div>
      <h3>{ props.genreName }</h3>
      <Songs {...props.songs} songs={props.songs} currentSong={props.currentSong} isPlaying={props.isPlaying} toggleOne={props.toggle}/>
      { props.songs && !props.songs.length && <small>No songs.</small> }

      <hr />
    </div>
  );

}
