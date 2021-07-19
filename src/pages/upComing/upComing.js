import React, {Component} from "react";
import { MovieContext } from '../../context/movieContext'

class UpComing extends Component {
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
                                Up Coming
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}
export default UpComing;