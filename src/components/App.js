import { data } from "../data";
import Navbar from "./navbar";
import MovieCard from "./moviecard";
import "../style.css";
import React from "react";


class App extends React.Component{


  componentDidMount(){
    const store = this.props.store;
    store.dispatch({
      type : 'ADD_MOVIES',
      movies : data
    });
    console.log(this.props.store.getState());
    store.subscribe( () =>{
      console.log("UPDATED");
      this.forceUpdate();
      console.log(this.props.store.getState());
    }) 
  } 


  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      // found the movie 
      return true;
    }
    return false;
  }
 
  onChangeTab = (val) => {
    // if(this.props.store.getState().movies.list==null){
    //   this.props.store.dispatch({
    //     type : 'ADD_MOVIES',
    //     movies : data
    //   });
    // }
    this.props.store.dispatch({type:'SET_SHOW_FAVOURITES', val})
  }

  render(){
    const {movies} = this.props.store.getState();
    const {list,favourites,showFavourites} = movies;

    const displayMovies = showFavourites ? favourites : list;

  return (
    <div className="App">
      <Navbar dispatch = {this.props.store.dispatch} />
      <div className="main" >
        <div className="tabs" >
          <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick = { () => this.onChangeTab(false)} >Movie</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick = {() => this.onChangeTab(true)} >Favourites</div>

        </div>

        <div className="list" >
        
          
            {displayMovies ? displayMovies.map((movie,index) => (

                <MovieCard movie={movie} key={`movie-${index}`} dispatch = {this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} /> // HERE MUST WRITE RETURN KEYWORD but for single line we need to write return in fat arrow function? !!!!!!!!!!!!!!!!!!!!
            )) : null}
          
          
        
        </div>

      </div>
    </div>
  );
  }
}

export default App;
