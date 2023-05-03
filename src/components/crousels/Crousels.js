import React, { useRef } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Crouselelemt from "./Crouselelemt";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
const Crousels = ({ data, loading }) => {
  const crouselcont = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => 
  {
    console.log(dir) 

    const container = crouselcont.current;

    const scrollAmount = (dir === "left") ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)
    console.log(scrollAmount)
    container.scrollTo({Left : scrollAmount ,behavior : "smooth"})  
  }

  return (
    <>
    <button
        className="btn btn-active btn-primary mx-0 top-8 absolute z-10"
        onClick={() => navigation("left")}
      >
        <UilArrowLeft />
      </button>
      <button
        className="btn btn-active btn-primary mx-0  absolute top-8 left-102 z-10"
        onClick={() => navigation("right")}
      >
        <UilArrowRight />
      </button>
    <div className="flex w-fit">
      {!loading ? (
        <div className="flex gap-4" ref={crouselcont}>
          {data?.map((item) => {
              return(
                <div className="flex my-5 mr-3 " key={item.id}>
              <Crouselelemt Title = {item.title} img = {url.backdrop_path + item.backdrop_path} desc = {item.overview} date = {dayjs(item.release_Date).format("MMM D, YYYY")} vote = {item.vote_average} genre = {item.genre_ids}/>
            </div>
            )
            
          })}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
    </>
  );
};
export default Crousels;
