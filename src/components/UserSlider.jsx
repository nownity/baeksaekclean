import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderWrapper = styled.div`
  width: 100%;
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

  @media (max-width: 768px) {
    max-width: 340px;
  }
`;

const SwiperWrapper = styled.div`
  width: 90%;
  border-radius: 12px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  border-radius: 12px;
`;

const ReviewContent = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

const UserName = styled.div`
  font-weight: bold;
  margin-top: 8px;
  font-size: 16px;
`;

const UserReview = styled.div`
  margin-top: 4px;
  line-height: 1.5;
`;

const UserSlider = ({ reviews = [] }) => {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        slidesPerView={3} // 🔥 한 번에 3개 보여줌
      >
        {reviews.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SwiperWrapper>
              <Image src={item.image} alt={`slide-${idx}`} loading="lazy" />
              <ReviewContent>
                <UserName>{item.name}</UserName>
                <UserReview>{item.review}</UserReview>
              </ReviewContent>
            </SwiperWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default UserSlider;
