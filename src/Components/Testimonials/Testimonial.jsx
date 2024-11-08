import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Parallax } from "swiper/modules";

import img4 from './../../assets/fi1.png';
import img2 from './../../assets/fi2.png';
import img3 from './../../assets/fi3.png';

function Testimonial() {
    return (

        <div id="testimonials" className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section__Heading">Testimonials</small>
            <h2 className="section__Title">What Our Clients <span>Says</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img4} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Amarjit kumar <span>Customer</span></h3>
                            <p>Best place to stay. I stayed in this hotel, and my experience was awesome. The behaviour of the staff as well as the owner is very polite and humble.
                            I highly recommend "Hotel Yash" for your stay in Dehri on sone</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>kamlesh pandey <span>Customer</span></h3>
                            <p>Hygiene hotel in dehri on sone, near dehri on sone railway station, satisfied with hotel facility and services, most recommended hotel in dehri on sone...</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="Shivam Raj" />
                        <div className={testimonialCSS.content}>
                            <h3>Sunil Upadhyay<span>Customer</span></h3>
                            <p>Hotel yash is Best choice hotel in dehri on sone ,highly recommend for other customer for stay in dehri on sone, best location near dehri on sone railway station...</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
