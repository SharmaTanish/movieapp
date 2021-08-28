const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites : false
}
export function movies (state =initialMoviesState,action){
    if(action.type ==='ADD_MOVIES'){
        return {
            ...state,
            list : action.movies
        }
    }
    else if(action.type ==='ADD_FAVOURITES'){
        return {
            ...state,
            favourites : [action.movie, ...state.favourites]
        }
    }
    else if(action.type ==='REMOVE_FROM_FAVOURITES'){
        const filteredArr = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
        )
        return {
            ...state,
            favourites :filteredArr
        }
    }
    else if(action.type ==='SET_SHOW_FAVOURITES'){
        
        return {
            ...state,
            showFavourites :action.val
        }
    }
    else if(action.type ==='HANDLE_MOVIE_SEARCH'){
        
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${action.searchText}`;

        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
        })

        // Now dispatch an action and required thunk middleware
    }
    return state;
}




const initialSearchState = {
    result : {}
}

export function search(state = initialSearchState,action){
    return state;
}

const initialRootReducer={
    movies:initialMoviesState,
    search:initialSearchState
}
export default function rootReducer(state = initialRootReducer,action){
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}