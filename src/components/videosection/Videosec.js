import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Swiper ,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
const Videosec = ({ data }) => {
  let i = 0;
  return (
    <div className="mx-17">
      <h1 className="text-3xl  font-bold mt-5 mb-5">Official Videos</h1>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      className="mb-5">
        <div className="flex gap-5 mb-5">
          {data?.results?.map((item) => {
            i++;
            if (i < 7) {
              return (
                <SwiperSlide className="swiper-1" key={item.id}>
                  <div className="card max-w-auto bg-base-100 shadow-xl">
                    <div className="card-body max-w-auto">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.key}`}
                        height={250}
                        width={300}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </div>
      </Swiper>
    </div>
  );
};
export default Videosec;
