import React, { Component } from 'react';

const posterUrlPrefix = 'https://image.tmdb.org/t/p/w780/';

// class FilmPoster extends Component {
//   render() {
//     return <img src={posterUrlPrefix + this.props.posterPath} alt="" />
//   }
// }

const FilmPoster = (props) => {
  return <img src={posterUrlPrefix + props.posterPath} alt="" />
}

export default FilmPoster;