import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import MovieCard from "./MovieCard/MovieCrad"
import poster from "./wallpaperflare.com_wallpaper (7).jpg";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const [pagenum, setpagenum] = useState(1);
  const { query } = useParams();
  const [data, setdata] = useState(null);
  const [Loading, setLoading] = useState(false);

  const { url } = useSelector((state) => state.home);

  const fetchinit = async () => {
    setLoading(true);
    const url = `https://api.themoviedb.org/3/search/multi?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=${pagenum}&include_adult=false&query=${query}`;
    const data = await fetch(url);
    const parseddata = await data.json();
    console.log(parseddata);
    setdata(parseddata);
    setLoading(false);
    setpagenum((pre) => pre + 1);
  };

  const fetchnxtdata = async () => {
    const urli = `https://api.themoviedb.org/3/search/multi?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=${pagenum}&include_adult=false&query=${query}`;
    const data = await fetch(urli);
    const parseddata = await data.json();
    console.log(parseddata);
    if (parseddata?.results) {
      setdata({
        ...data,
        results: [...data?.results, ...parseddata?.results],
      });
    } else {
      setdata(parseddata);
    }
    setpagenum((pre) => pre + 1);
  };

  useEffect(() => {
    setpagenum(1);
    fetchinit();
  }, [query]);

  const navigate = useNavigate()
  return (
    <div>
      {data?.results?.length > 0 ? (
        <div className="m-5 grid grid-3">
          <h1 className="text-3xl  font-bold mt-5 mb-5">Results</h1>
          
            <InfiniteScroll
                className="content"
                dataLength={data.results.length || []}
                next={fetchnxtdata}
                hasMore={pagenum <=data?.total_pages}

            >
            <div className="grid grid-cols-3">
              {data?.results?.map((item, index) => {
                if (item.media_type === "person") return;
                return (
                    <div onClick={()=>navigate(`/${item.media_type}/${item.id}`)}>
                  <MovieCard key = {index}
                    Title={item.title || item.name}
                    img={item.backdrop_path?(url.backdrop_path + item.backdrop_path) : poster}
                    desc={item.overview}
                    date={dayjs(item.release_Date).format("MMM D, YYYY")}
                    vote={item.vote_average}
                  />
                  </div>
                );
              })}
            </div>
            </InfiniteScroll>
          </div>
      ) : (
        <div className="flex min-h-screen justify-center flex">
          No Results Found
        </div>
      )}
    </div>
  );
};
export default SearchResult;
