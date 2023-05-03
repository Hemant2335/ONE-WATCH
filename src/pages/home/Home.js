import React from 'react';
import Homebanner from "./HomeBanner/Homebanner"
import Trending from './Trending/Trending';
import Switchtab from '../../components/switchtab/Switchtab';
import { useState  , useSelector , useEffect} from 'react';
import useFetch from '../../hooks/usefetch';
import Crousels from '../../components/crousels/Crousels';
const Home = () => {

    const [endpoint, setendpoint] = useState("day")
    const {data , loading}  = useFetch(`https://api.themoviedb.org/3/trending/all/${endpoint}?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`)
    const Onswitch=(media)=>{
        setendpoint(media == "day" ? "day" : "week");
        console.log(data);
    }

    return <div className='min-h-screen mx-5'>
        <Homebanner/>
        <div className='max-h-5 flex justify-between'>
        <Trending/>
        <Switchtab Onswitch = {Onswitch}/>
        </div>
        <div className='flex my-10 gap-10'>
            <Crousels data = {data?.results} loading = {loading}/>
        </div>
    </div>;
}

export default Home;