import React from 'react';
import { useSelector } from 'react-redux';
const Genres = ({data}) => 
{
    const {genres} = useSelector((state => state.home))
    return <div>
        {data?.map((e)=>{
            return (
                <div className="badge badge-primary mx-2">{genres[e]?.name}</div>
            )
        })}
        
    </div>;
}
export default Genres;