import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: "all"
  }

  handleFilterClick = (filtering) => {
    this.setState({ filter: filtering })

    console.log("Setting filter to" + filtering);
  }
  render() {
    const allFilms = this.props.films.map(film => <FilmRow key={film.id} film={film} />);
    return (
      // <div className="film-list">
      //   <h1 className="section-title">FILMS</h1>
      //   {allFilms}
      // </div>
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL<span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES<span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

// const FilmListing = (props) => {
//   const allFilms = props.films.map(film => <FilmRow key={film.id} film={film} />);
//   return (
//     <div className="film-list">
//       <h1 className="section-title">FILMS</h1>
//       {allFilms}
//     </div>
//   );
// }

export default FilmListing;