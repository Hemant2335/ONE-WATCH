import React from 'react';
import { useState } from 'react';
import useFetch from '../../../hooks/usefetch';
import Switchtab from '../../../components/switchtab/Switchtab';
import Crousels from '../../../components/crousels/Crousels';
const TopRated = () => {
    const [endpoint, setendpoint] = useState("movie")
    const {data , loading}  = useFetch(`https://api.themoviedb.org/3/${endpoint}/top_rated?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`)
    const Onswitch=(media)=>{
        setendpoint(media == "movie" ? "movie" : "tv");
        console.log(data);
    }
    return <div>
       <h1 className="text-4xl  font-bold">Top Rated</h1>
       <div className='max-h-max flex justify-end'>
        <Switchtab Onswitch = {Onswitch} one = "Movie" two = "Tv"/>
        </div>
        <div className='flex my-5 gap-10'>
            <Crousels data = {data?.results} loading = {loading} endpoint = {endpoint}/>
        </div>
    </div>;
}

export default TopRated;