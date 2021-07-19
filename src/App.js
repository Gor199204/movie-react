import React, {Component} from "react"
import { MovieContext } from "./context/movieContext";
import Popular from "./pages/popular/popular";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import UpComing from "./pages/upComing/upComing";
import NowPlaying from "./pages/nowPlaying/nowPlaying";
import TopRated from "./pages/topRated/topRated";
import MovieDetails from "./pages/movie";
import { BrowserRouter, Route } from "react-router-dom"
import Api from "./services/dataService";


class AppWrapper extends Component{
  constructor(){
    super();
    this.state = {
      movies: [],
      language: 'us',
      translations: {},
      isOuth: false,
      isLoading: false,
      pricing: []
    }
  }
  // componentDidMount() {
  //   Api.getSearch("avatar").then((data) => {
  //     console.log(data);
  //   });
  // }

  render(){
    console.log(this.state);
    return(
      <MovieContext.Provider
      value = {{
        state: this.state,
        dispatch: this.setState
      }}
      >
        
      <BrowserRouter>
      <Header />

        <Route path="/" exact component={Home}/>
        <Route path="/popular" component={Popular}/>
        <Route path="/upComing" component={UpComing}/>
        <Route path="/nowPlaying" component={NowPlaying}/>
        <Route path="/topRated" component={TopRated}/>
        <Route path="/movie/:id" component={MovieDetails}/>


      </BrowserRouter>
      </MovieContext.Provider>
    )
  }
}
export default AppWrapper