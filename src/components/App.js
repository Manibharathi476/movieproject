import React, { Component } from 'react';
import Nav from './nav';
import Search from './search';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';



class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
      videos: []
    }

    this.apikey = "301b9d2f0ecfe254c54857cc606b793b";
    
  }
  

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null})
  }

  getMovieId = () => {
    const Id = this.state.currentMovie.id
    console.log(Id);
    fetch(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${this.apikey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({videos: [...data.results]})
    })
    
  }
  
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  


  render() {
    const numberPages=Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        {this.state.currentMovie == null ? <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <div><MovieInfo videoOnReady={this.videoOnReady} currentMovie={this.state.currentMovie} videos={this.state.videos} closeMovieInfo={ () => this.closeMovieInfo} getMovieId={this.getMovieId}/></div>}
        { this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ' '}
      </div>
    );
  }
    
}

export default App;





