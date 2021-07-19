import React, {Component} from "react";
import { MovieContext } from '../../context/movieContext'
import Search from "../../components/search/search";

class Home extends Component {
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
                               <Search />
                               
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer>
        )
    }
}
export default Home;