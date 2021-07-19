import React from 'react';
import Api from '../../services/dataService';

import { IMG_URL } from '../../config/url';

class MovieDetails extends React.Component {
    state = {
        movie: null,
    }

    componentDidMount() {
        Api.getMovieById(this.props.match.params.id).then(res => {
            console.log({ res });
            this.setState({
                movie: res,
            })
        });
    }

    render () {
        const { movie } = this.state;
        if (movie) {
            return (
                <div style={{ padding: 32, width: 500 }}>
                    <img src={`${IMG_URL + movie.backdrop_path}`} alt={movie.title} />
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                </div>
            )
        }
        return (
            <h1>Not Found</h1>
        )
    }
}

export default MovieDetails;
