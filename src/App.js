import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiconfig } from "./store/homeslice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fotter from "./components/Fotter/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import Four from "./pages/404/Four";
import SearchResult from "./pages/SearchResult/SearchResult"
import { getGenres } from "./store/homeslice";


function App() {


  const apidata = async(urli)=>{
    const url = urli;
    const data = await fetch(url);
    const parseddata = data.json();
    return parseddata;
  }

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url.total_pages);

  useEffect(() => {
    apiconfig();
    genresCall();
  }, []);

  const apiconfig = async () => {
    const urli =
      "https://api.themoviedb.org/3/configuration?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1";
    const data = await fetch(urli);
    const parseddata = await data.json();
    console.log(parseddata);

    const url = {
      backdrop_path : parseddata.images.secure_base_url + "original",
      poster : parseddata.images.secure_base_url + "original",
      profile : parseddata.images.secure_base_url + "original",
    }

    dispatch(getApiconfig(url));
  };

const genresCall = async()=>{
  let promises  =[]
  let endPoints = ["tv" , "movie"]
  let allGenres = {}

  endPoints.forEach((url)=>{
      promises.push(apidata(`https://api.themoviedb.org/3/genre/${url}/list?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US`))
  }) 

  const da = await Promise.all(promises)
  console.log(da);
  da.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id] = item))
  })
  console.log(allGenres)

  dispatch(getGenres(allGenres));
  
}


  return (
    <Router>
      <div
      style={{ backgroundColor : `#1a1110` }} className="overflow-x-hidden"
    >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore/:mediaType" element={<Explore />} />
        <Route exact path="*" element={<Four />} />
        <Route exact path="/:mediaType/:id" element={<Details />} />
        <Route exact path="/search/:query" element={<SearchResult/>} />
      </Routes>
      </div>
      <Fotter />
    </Router>
  );
}

export default App;
