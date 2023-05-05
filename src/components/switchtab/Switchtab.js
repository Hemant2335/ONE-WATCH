import React from "react";
import { useState } from "react";
const Switchtab = ({ data, Onswitch ,one ,two } , props) => {
  const [tab, settab] = useState({
    month : "",
    year : "active"
  })

  const changetab=(type)=>
  {
    if (type==="year")
    {
        settab({
            month : "",
            year : "active"
        })
        Onswitch("movie");
    }
    else
    {
        settab({
            month : "active",
            year : ""
        })
        Onswitch("tv");
    }
    
  }


  return (
    <div>
      <div className="tabs tabs-boxed">
        <a className={`tab tab-${tab.month}`} onClick={()=>changetab("month")} >{two}</a>
        <a className={`tab tab-${tab.year}`} onClick={()=>changetab("year")}>{one}</a>
      </div>
    </div>
  );
};
export default Switchtab;
