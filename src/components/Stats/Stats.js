import React from "react";
import { UilPlay } from '@iconscout/react-unicons';
import Videopop from "../Videopop/Videopop";
const Stats = (props) => {
  return (
    <div>
      <div className="stats shadow h-15 w-16">
        <div className="stat h-7 ">
          <div className="stat-figure text-primary h-7">
          </div>
          <div className="stat-title">Rating</div>
          <div className="stat-value text-primary">{props.vote}</div>
          <div className="stat-desc">{Math.floor(props.vote)} people liked out of 10 </div>
        </div>

        <div className="stat h-7 ">
          <div className="stat-figure text-secondary h-7 ">
          </div>
          <div className="stat-title">No of Votes</div>
          <div className="stat-value text-secondary">{props.vote_no}</div>
          <div className="stat-desc">No of people voted for this movie</div>
        </div>
        <div className="stat h-7 ">
          <div className="stat-figure text-secondary h-7 ">
          </div>
          <div className="stat-title">Watch Trailer</div>
          <div className="stat-title flex justify-center"><label htmlFor="my-modal-5" className="btn btn-primary"><UilPlay/></label></div>
          <div className="stat-desc">Amazing trailer to Watch</div>
          <Videopop video = {props.video}></Videopop>
        </div>
      </div>
    </div>
  );
};

export default Stats;
