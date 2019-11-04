import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  handleDetailsClick = () => {
    console.log("Fetching details for " + this.props.film.title);
  }
  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return (
      <div className="film-row" onClick={this.handleDetailsClick}>
        <FilmPoster posterPath={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave />
      </div>
    )
  }
}

// const FilmRow = (props) => {
//   const year = new Date(props.film.release_date).getFullYear();
//   return (
//     <div className="film-row">
//       <FilmPoster posterPath={props.film.poster_path} />
//       <div className="film-summary">
//         <h1>{props.film.title}</h1>
//         <p>{year}</p>
//       </div>
//       <Fave />
//     </div>
//   )
// }

export default FilmRow;