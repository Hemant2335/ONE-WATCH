import React from 'react';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const {data , loading}  = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1")

  const navigate = useNavigate();
  const [query, setquery] = useState(""); 
  const queryhandle = (e)=>{
    if (e.key === "Enter" && query.length!=0)
    {
      navigate(`/search/${query}`)
    }
  }

  const navhandle=(type)=>{
    if(type === "movie")
    {
      navigate(`/explore/movie`)
    }
    else{
      navigate(`/explore/tvshows`)
    }
  }

    return <div className='Nav-cont'>
        <div className="navbar bg-base-100 border-solid bg-opacity-0">
  <div className="navbar-start ">
    <a className="btn btn-neutral normal-case text-xl" onClick={()=>navigate('/')}>ONEWATCH</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/explore/movie"><a>Movies</a></Link></li>
      <li><Link to="/explore/tvshows"><a>TV Shows</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" onKeyUp={queryhandle}
  onChange={(e)=>setquery(e.target.value)}
  />
  </div>
</div>
    </div>;
}
export default Navbar;