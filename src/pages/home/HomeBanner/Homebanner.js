import React from "react";
import banner from "./wall.jpg";
import { useState ,useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/usefetch";
import Img from "../../../components/lazyloadimg/Img";

const Homebanner = () => {
  const { url } = useSelector((state) => state.home);
  const {data , loading}  = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1")
  useEffect(()=>{
    const bg  = url.backdrop_path + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg)
  },[data])

  const [background, setbackground] = useState("");
  return (
    <div> 
      <div
        className="rounded-lg my-5 h-auto bglazy"
        style={{backgroundImage : `url(${background})`}}
      >
          
          <div className="hero-content flex-col lg:flex-row ">
          <Img src={background} className="bglazy rounded-lg "/>
            <div>
              <h1 className="text-5xl font-bold my-10">Naruto</h1>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ipsa deleniti nobis pariatur perferendis omnis quia aut assumenda mollitia velit, ex dolor doloribus atque ipsum esse ducimus. Saepe, nam doloribus.
              </p>
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Homebanner;
