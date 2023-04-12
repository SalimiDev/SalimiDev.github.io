import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/zoom';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay } from 'swiper';
import Image from 'next/image';

const Slider = ({ images }) => {
    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const mainSwiperOptions = {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        navigation: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true },
        scrollbar: { draggable: true },
    };

    const thumbsSwiperParams = {
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 6,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        },
    };

    return (
        <div className='w-full lg:w-1/2 px-2'>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay]} {...mainSwiperOptions}>
                {images?.map(image => (
                    <SwiperSlide key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper} {...thumbsSwiperParams}>
                {images?.map(image => (
                    <SwiperSlide key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
