"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "../TestimonialCard";

const TestimonialBody = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center space-x-4 pl-5 pr-5 mb-12">
    <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Jessica Devis"
              username="jessicadevis"
              date="Jan 17, 2024"
              text="The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces."
              icon="🎉"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Mary Joshiash"
              username="maryjoshiash"
              date="Jan 18, 2024"
              text="It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled."
              icon="🎉"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Marcell Glock"
              username="Marcel Glock"
              date="Jan 19, 2024"
              text="The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces."
              icon="😎"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Jessica Devis"
              username="jessicadevis"
              date="Jan 17, 2024"
              text="The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces."
              icon="🎉"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Mary Joshiash"
              username="maryjoshiash"
              date="Jan 18, 2024"
              text="It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled."
              icon="🎉"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              imageSrc="https://img.a.transfermarkt.technology/portrait/big/472423-1683900849.jpg?lm=1"
              name="Marcell Glock"
              username="Marcel Glock"
              date="Jan 19, 2024"
              text="The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces."
              icon="😎"
            />
          </SwiperSlide>
        </Swiper>
        </div>
    </>
  )
}

export default TestimonialBody