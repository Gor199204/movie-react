import React, {Component} from "react";
import Api from "../../services/dataService";
import apiHandler from "../../services/apiHandler";
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
            <div >
                {
                    popularMovies.map(movie =>(
                        <div>
                            <h2><a href="#">{movie.title}</a></h2>
                            
                        </div>
                    ))
                }
            </div>
            
            // <div></div>
        )
    }
}
export default Popular;