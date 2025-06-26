import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;

  .swiper-pagination {
    padding: 10px;
  }
  .swiper-pagination-bullet {
    background: black; // 페이지네이션 점 색상 변경
    width: 15px;
    height: 15px;
    &:hover {
      opacity: 0.7;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    &:hover {
      opacity: 0.6;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .swiper-pagination-bullet-active {
    background: black;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageSlider = ({ images = [] }) => {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image src={img} alt={`slide-${idx}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default ImageSlider;
