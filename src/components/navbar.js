import React from 'react';

class Navbar extends React.Component {
    // state = {  }

    constructor(props){
        super(props);
        this.state={
            showSearchResults: true,
            searchText:''
        }
    }

    handleChange = (e) => {
        this.setState(
            {
            searchText : e.target.value
            }
            )
    }

    handleSearch = () => {
        const{searchText} = this.state;
        this.props.dispatch({
            type:'HANDLE_MOVIE_SEARCH',
            searchText
        })
    }

    render() { 
        return ( 
            <div className="nav" >
       
                <div className="search-container " >
                    <input onChange = {this.handleChange}></input>
                    <button id="search-btn" onClick= {this.handleSearch}>Search</button>
                </div>
            </div>
         );
    }
}
 
export default Navbar;