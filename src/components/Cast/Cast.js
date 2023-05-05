import React, { useEffect } from "react";
import avtr from "./7309681.jpg";
import Img from "../lazyloadimg/Img";
import { useSelector } from "react-redux";
const Cast = ({ data }) => {
  const { url } = useSelector((state) => state.home);
  let i = 0;
  return (
    <div className="mx-17">
      <h1 className="text-3xl  font-bold mb-5">Top Cast</h1>
      <div className="flex gap-3">
      {data?.map((item) => {
        i++;
        let imgUrl = item.profile_path ? url.profile + item.profile_path : avtr;
        if (i<7)
        {
        return (
          <div  key={item.id}>
            
            <div className="avatar h-7 rounded-sm mx-5">
              <Img src={imgUrl}/>
            </div>
            <h1 className="text text-primary mx-5">{item.name}</h1>
            <h1 className="text  relative  mx-5">{item.character}</h1>
          </div>
        );
        }
        
      })}
      </div>
    </div>
  );
};
export default Cast;
