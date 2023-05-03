import React from "react";
// import poster from "./poster.jpeg";
// import poster1 from "./naruto-5783102.png";
import Img from "../lazyloadimg/Img";
import { useState } from "react";
import Genres from "../genres/Genres";
const Crouselelemt = (props) => {

  return (
    
    <div>
      <div className="flex gap-1">
      <h1>{props.vote.toFixed(1)}</h1><progress className={`progress progress-primary w-56 mt-2`} value={props.vote} max="10">hii</progress>
      </div>
      <div className="card w-6 shadow-xl h-18 "> 
      <Img src = {props.img} className="rounded-lg bglazy cursor-pointer "/>
      <Genres data = {props.genre}/>
      <h1 className="text-center font-bold mt-4">{props.Title}</h1>
      <h1 className="text-center font-bold text-primary">{props.date}</h1>
      <div>
      </div>
      </div>
      
    </div>
  );
};
export default Crouselelemt;
