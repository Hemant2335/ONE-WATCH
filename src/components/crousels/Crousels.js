import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Crouselelemt from "./Crouselelemt";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { useState } from "react";
const Crousels = ({ data, loading ,endpoint}) => {
  const crouselcont = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const [dire, setdire] = useState("");

  return (
    <>
      <>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          key={url.id}
        >
          <div className="flex w-fit my-10" key={url.id}>
            {!loading ? (
              <div className="flex gap-4" ref={crouselcont}>
                {data?.map((item) => {
                  return (
                    <>
                      <div
                        className={`flex my-10  mr-3 relative ${dire}`}
                        key={item.id}
                      >
                        <SwiperSlide
                          className="swiper-1"
                          onClick={() =>
                            navigate(`/${item.media_type?item.media_type:endpoint}/${item.id}`)
                          }
                          key={item.id}
                        >
                          <Crouselelemt
                            Title={item.title || item.name}
                            img={url.backdrop_path + item.backdrop_path}
                            desc={item.overview}
                            date={dayjs(item.release_Date).format(
                              "MMM D, YYYY"
                            )}
                            vote={item.vote_average}
                            genre={item.genre_ids.slice(0,2)}
                          />
                        </SwiperSlide>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </Swiper>
      </>
    </>
  );
};
export default Crousels;
