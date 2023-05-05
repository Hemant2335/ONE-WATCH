import React from "react";
import useFetch from "../../../hooks/usefetch";
import Crousels from "../../../components/crousels/Crousels";
const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=11b7f92ac0548b80d7e51942d29f9d5b&language=en-US&page=1`
  );
  return (
    <div>
      <div className="mx-17">
        {mediaType === "tv" ? (
          <h1 className="text-3xl  font-bold mb-5">Similar Tv Shows</h1>
        ) : (
          <h1 className="text-3xl  font-bold mb-5">Similar Movies</h1>
        )}
        <Crousels data={data?.results} loading={loading} />
      </div>
    </div>
  );
};

export default Similar;
