import React from "react";
import testvid from "../Videopop/0001-0150.mp4";
import ReactPlayer from "react-player";
const Videopop = (props) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex content-center justify-center gap-5">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${props.video}`}></ReactPlayer>
          <div className="modal-action">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videopop;
