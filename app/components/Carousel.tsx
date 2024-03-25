'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'
export default function Carouset({ height, width, pagination, imgList }: any) {

    return <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        loop
    >
        {imgList.map((item: string) => {
            return <SwiperSlide key={item} className="w-full" style={{ height: height, borderRadius: '20px' }}>
                <Image
                    fill
                    className="rounded-md cursor-pointer w-full" src={item} alt=""></Image>
            </SwiperSlide>
        })}
    </Swiper>
}