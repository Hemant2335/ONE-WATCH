import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyloadimg/Img';
import Stats from "../../../components/Stats/Stats"
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/usefetch';
const DetailsBanner = ({video}) => {
    const { url } = useSelector((state) => state.home);
    const [some, setsome] = useState("Title")
    const [overview, setoverview] = useState("Overview")
    const [background, setbackground] = useState("")

    const {mediaType , id} = useParams();
    const {data , loading} = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`);


    useEffect(()=>{
        const bg = url?.backdrop_path + data?.backdrop_path
        console.log(data);
        setsome(data?.title||data?.name);
        setoverview(data?.overview)
        setbackground(bg)
    },[data])

    return <>
        <div className=''  >
        <div className="flex m-17 min-w-screen">
          <Img src = {background} className="rounded-lg h-11 "/>
          <div className='mx-2 w-18'>
          <h1 className="text-5xl  font-bold ">{some}</h1>
          <p className='w-12  mb-3'>{overview}</p>
          <Stats vote = {data?.vote_average} vote_no  = {data?.vote_count} status ={data?.status} video = {video}/>
          </div>
        </div>
        <div>
        <div className="flex  min-h-4 mt-17 mx-17 mb-4">
  <div className="grid h-17 flex-grow card bg-base-300 rounded-box place-items-center ">Status : {data?.status} </div>
  <div className="divider divider-horizontal"></div>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Release Date : {dayjs(data?.release_Date).format(
                              "MMM D, YYYY")} </div>
  <div className="divider divider-horizontal"></div>
  {(data?.runtime)?<div className="grid h-17 flex-grow card bg-base-300 rounded-box place-items-center">Runtime : {data?.runtime} mins</div> : <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Seasons : {data?.seasons?.length}</div>}
</div>
        </div>
        </div>
    </>;
}
export default DetailsBanner;