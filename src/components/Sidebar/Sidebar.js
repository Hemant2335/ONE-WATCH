import React from "react";
import logo from "./img/one-logo.png";
import expimg from "./img/compass1.png";
import homimg from "./img/home1.png";
import searimg from "./img/search1.png";
import { Link } from "react-router-dom";
import avt from "./img/7309681.jpg";
const Sidebar = () => {
  return (
    <div className="Sidebar-cont">
      <div className="drawer drawer-mobile border-solid">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={avt} />
                </div>
              </div>
            </li>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider"></div>
            </div>
            <li><div className="list-cont flex"><img src={homimg} alt="img" className="h-5" /><a>Home</a></div></li>
            <li>
              <a>Explore</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
