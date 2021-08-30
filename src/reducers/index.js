const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites : false,
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
    else if(action.type ==='HANDLE_MOVIE_SEARCH'){   //SINCE BY DOING LIKE THIS ,I.E., DIRECTLY ,WE DON'T HAVE FUNCTION OF FUNCTION ,I.E., FUNCTION RETURNING A FUNCTION BUT IN THUNK WE USE CURRYING , THEREFORE TO USE THUNK WE SHOLUD MAKE ACTION AND REDUCERS SEPARATE ONLY BY USING FUCTIONS AS DONE IN CODEIAL, IF DO LIKE THIS ONLY THEN THUNK ACTION CAN NEVER BE FUNCTION BUT REMAIN OBJECT ONLY, THEREFORE ERRORS COME! 
        
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${action.searchText}`;
                   
        return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
          // Now dispatch an action
          
        })

    }

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