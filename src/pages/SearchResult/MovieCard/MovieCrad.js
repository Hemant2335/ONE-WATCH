import React from "react";
import Img from "../../../components/lazyloadimg/Img"
import { useState } from "react";
const MovieCard = (props) => {

  return (
    <>
      <div className="card w-6 shadow-xl h-11 " key={props.id}> 
      <Img src = {props.img} className="rounded-lg bglazy cursor-pointer "/>
      <h1 className="text-center font-bold mt-4">{props.Title}</h1>
      <h1 className="text-center font-bold text-primary">{props.date}</h1>
      <div>
      </div>
      </div>
      
    </>
  );
};
export default MovieCard;

