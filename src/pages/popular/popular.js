import React, {Component} from "react";
import Api from "../../services/dataService";
import apiHandler from "../../services/apiHandler";
import { IMG_URL } from '../../config/url';
import { Link } from 'react-router-dom'
import './popular.css'


console.log(apiHandler);
class Popular extends Component {
    constructor(){
        super();
        this.state={
            popularMovies: [],
        }
    }

    componentDidMount() {
        Api.getMovies("popular",4).then((data) => {
          console.log(data);
          this.setState({
            popularMovies:data.results
          })
        });
      }
    render(){
        const {popularMovies} = this.state
        return(
            <div className="popular_cont" >
                {
                    popularMovies.map(movie =>(
                        <div key={movie.id}>
                            <div className="popular"> 
                        <Link to={`/movie/${movie.id}`}>
                      <div className="popular_img">
                      <img src={`${IMG_URL + movie.backdrop_path}`} alt={movie.title} />
                      </div>

                            <div className="popular_decription">
                            <h2>{movie.title}</h2>
                            </div>

                        </Link>
                        </div>
                    </div>
                    ))
                }
            </div>
            
            // <div></div>
        )
    }
}
export default Popular;