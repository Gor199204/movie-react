import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "./search.css"
import Api from "../../services/dataService";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            movies: [],
        }
    }
    componentDidMount() {
        this.getMovies();
    }

    inputSearchValue = (e) =>{
        this.setState ({
            value:e.target.value,
        })
    }

    getMovies = () => {
        const {value} = this.state;
        if (value !== undefined) {
            Api.getSearch(this.state.value)
                .then((data) => {
                    if (data.results) {
                        this.setState({
                            movies: data.results,
                        })
                    }
                }
            );
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.value !== prevState.value && !!this.state.value) {
    //         this.getMovies();
    //     }
    // }
    

        
        render(){
            const {value, inputSearchValue} = this.state
            console.log(this.state);
        return(
            <>
                <div className="search">
                    <div className="searchItems">
                        <input type="text" placeholder="Serach a film..." value={value} onChange={this.inputSearchValue}/>
                        <button onClick={this.getMovies}>Search</button>
                    </div>
                    {this.state.movies.map(movie => (
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <h2>{movie.title}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Search;