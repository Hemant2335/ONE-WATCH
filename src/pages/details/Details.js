import React, { useEffect } from 'react';
import useFetch from '../../hooks/usefetch';
import DetailsBanner from './DetailsBanner/DetailsBanner';
import { useParams } from 'react-router-dom';
const Details = () => {

    const {mediaType , id} = useParams();
    const {data , loading} = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`);
    const {data:credits , loading:ceditsLoading} = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`);

    useEffect(()=>{
        console.log(data);
    })

    return <div>
        <DetailsBanner video = {data?.results[0]?.key}/>
    </div>;
}
export default Details;