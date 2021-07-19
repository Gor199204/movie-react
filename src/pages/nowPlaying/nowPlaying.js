import React, {Component} from "react";
import { MovieContext } from '../../context/movieContext'

class NowPlaying extends Component {
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
                                Now Playing
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}
export default NowPlaying;