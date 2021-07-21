import React from 'react';
import Api from '../../services/dataService';
import './index.css'
import { IMG_URL } from '../../config/url';
import Raiting from '../../components/Rate/rate';



class MovieDetails extends React.Component {
    
         
        state = {
            movie: null,
            ratingStar: null,
    
        }
    

    componentDidMount() {
        Api.getMovieById(this.props.match.params.id).then(res => {
            console.log({ res });
            this.setState({
                movie: res,
                ratingStar: res.vote_average,

            })
        });
    }

    render () {
        const { movie, ratingStar  } = this.state;
        console.log(ratingStar);
        if (movie) {
            return (
                <div className="movie_main_div" >
                    <div className="movie_img">
                    <img src={`${IMG_URL + movie.backdrop_path}`} alt={movie.title} />
                    </div>
                    <div className="movie_description">
                    <h1>{movie.original_title}</h1>
                    <hr />
                    <p><b>Description</b></p>
                    <p>{movie.overview}</p>
                    <hr />
                    <span><b>Genre</b></span>
                    <div className="genre">
                    {movie.genres.map(genre =>(
                        <p>{genre.name}</p>
                    )
                        )}
                        </div>
                        <div className="raiting">
                            <Raiting  value = {ratingStar} />
                        </div>
                    <hr />
                    <p><b>Trailer</b></p>
                    <iframe width="700px" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    </div>
                </div>
            )
        }
        return (
            <h1>Not Found</h1>
        )
    }
}

export default MovieDetails;
