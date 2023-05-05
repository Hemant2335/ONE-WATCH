import React from 'react';
import Homebanner from "./HomeBanner/Homebanner"
import Trending from './Trending/Trending';
import Popular from "./Popular/Popular";
import TopRated from './Top_rated/TopRated';

const Home = () => {
    return <div className='min-h-screen mx-5'>
        <Homebanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>;
}

export default Home;