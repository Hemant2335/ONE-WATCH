import React from "react";
import { useState } from "react";
const Switchtab = ({ data, Onswitch }) => {
  const [tab, settab] = useState({
    month : "active",
    year : ""
  })

  const changetab=(type)=>
  {
    if (type==="year")
    {
        settab({
            month : "",
            year : "active"
        })
        Onswitch("day");
    }
    else
    {
        settab({
            month : "active",
            year : ""
        })
        Onswitch("week");
    }
    
  }


  return (
    <div>
      <div className="tabs tabs-boxed">
        <a className={`tab tab-${tab.month}`} onClick={()=>changetab("month")} >Day</a>
        <a className={`tab tab-${tab.year}`} onClick={()=>changetab("year")}>Week</a>
      </div>
    </div>
  );
};
export default Switchtab;
