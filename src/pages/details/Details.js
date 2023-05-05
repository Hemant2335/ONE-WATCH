import React, { useEffect } from 'react';
import useFetch from '../../hooks/usefetch';
import DetailsBanner from './DetailsBanner/DetailsBanner';
import { useParams } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Videosec from '../../components/videosection/Videosec';
import Recomm from './RecommendMove/Recomm';
import Similar from './Similar/Similar';
import Simp from '../Simp/Simp';
const Details = () => {

    const {mediaType , id} = useParams();
    const {data , loading} = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`);
    const {data:credits , loading:creditsLoading} = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`);

    useEffect(()=>{
        console.log(data);
    })

    return <div>
        <DetailsBanner video = {data?.results[0]?.key}/>
        <Cast data = {credits?.cast} loading ={creditsLoading} />
        <Videosec data = {data}/>
        <Recomm mediaType = {mediaType}  id  = {id}/>
    </div>;
}
export default Details;