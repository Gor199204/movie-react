import React, {Component} from "react";
import { MovieContext } from '../../context/movieContext'

class TopRated extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <MovieContext.Consumer>
                {
                    () => {
                        return(
                            <div>
                                Top Rated
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}
export default TopRated;