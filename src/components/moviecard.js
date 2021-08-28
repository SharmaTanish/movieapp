import React from 'react';

class MovieCard extends React.Component {
    // state = {  }
   
    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch({type:'ADD_FAVOURITES',movie});
    }

    handleUnFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch({type:'REMOVE_FROM_FAVOURITES',movie});
    }

    render() { 
        const {movie,isFavourite} = this.props; // INSIDE RENDER!!!!!!!!!!!!!!!
        return ( 
            <div className="movie-card" >
                <div className="left" >
                <img alt="movie-poster" src={movie.Poster} ></img>
                </div>
            
                <div className="right" >
                    <div className="title" > {movie.Title} </div>
                    <div className="plot" > {movie.Plot} </div>
                    <div className="footer" > 
                        <div className="rating" >{movie.imdbRating}</div>
                        {
                        isFavourite
                        ?
                        <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick} >UnFavourite</button>
                        :
                        <button className="favourite-btn" onClick={this.handleFavouriteClick} >Favourite</button>
                        }
                     </div>

                </div>

            </div>
         );
    }
}
 
export default MovieCard;