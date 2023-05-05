import React from "react";
import banner from "./wall.jpg";
import { useState ,useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/usefetch";
import Img from "../../../components/lazyloadimg/Img";
import dayjs from "dayjs";

const Homebanner = () => {
  const { url } = useSelector((state) => state.home);
  const {data , loading}  = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1")
  useEffect(()=>{
    const random  = Math.floor(Math.random() * 20)
    const bg  = url.backdrop_path + data?.results?.[random]?.backdrop_path;
    const title = data?.results?.[random]?.title;
    const date = dayjs(data?.results?.[random]?.release_Date).format(
      "MMM D, YYYY")
    setbackground(bg)
    settitle(title)
    setdate(date);

    console.log(data?.results)
  },[data])

  const [background, setbackground] = useState("");
  const [title, settitle] = useState("");
  const [date, setdate] = useState("")
  return (
    <div> 
      <div
        className="rounded-lg my-5 h-auto bglazy bg-fit " style={{backgroundImage : `url(${background})`}}
      >
          
          <div className="flex justify-center text-center max-h-8 opacity-70">
          <Img src={background} className="bglazy rounded-lg h-12 opacity-60"/>
          </div>
          <div className="flex justify-center  max-h-8 ">
          <h1 className="text-8xl  font-bold absolute z-10 top-13">{title}</h1>
          <h1 className="text-5xl text-primary  font-bold absolute z-10 top-14">{date}</h1>
          </div>
        </div>
      </div>
  );
};
export default Homebanner;
