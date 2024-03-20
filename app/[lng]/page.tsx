'use client'
import { useTranslation } from "@/app/i18n/client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const [t] = useTranslation(lng, 'home')
  return (
    <main>
      <div className="h-[500px] mb-[8px] bg-black relative">
        <Image
          fill
          src={'/images/home/banner1.jpg'}
          alt=""
        />
      </div>
      <div className="bg-[url('/bg1.jpg')] bg-no-repeat bg-fixed bg-cover h-[1400px] pt-[50px]">
        <div className="relative h-[445px]">
          <Image
            fill
            src={'/images/home/img1.png'}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-[1206px] flex justify-end">
          <div className="
        w-[895px] h-fit 
        rounded-md 
        mt-[20px] mb-[30px] py-16 bg-[url('/bg4.jpg')] bg-cover pl-[80px] text-white text-[48px] leading-tight">
            <span>{t('item1')}</span>
            <br />
            <strong>{t('item2')}</strong>
          </div>
        </div>
        <div className="mx-auto mt-[70px] max-w-[1206px] w-[80%] h-fit">
          <p className="pl-[160px] text-orange-400 text-[44px]">{t('item3')} <strong className="text-orange-600">{t('item4')}</strong></p>
          <div className="mx-auto mt-[35px] w-[710px] text-[18px]">
            <p>{t('item5')}</p>
            <br />
            <p>{t('item6')} <strong>{t('item7')}</strong></p>
            <br />
            <p>{t('item8')} <strong>{t('item9')}</strong> {t('item10')}</p>
          </div>
        </div>
      </div>
      <div className="h-[785px] py-[50px] bg-[url('/images/home/img2.png')] bg-no-repeat bg-[right_0_center] bg-auto">
        <div className="max-w-[1206px] mx-auto leading-none">
          <div className="text-[45px] text-orange-400 ml-[-40px]">
            {t('item11')}
            <br />
            <strong>{t('item12')}</strong>
          </div>
          <div className="w-[585px] mt-[60px] text-[18px] leading-8">
            <p>{t('item13')}</p>
            <br />
            <p>{t('item14')}</p>
            <div className="h-[215px] mt-[20px]">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                loop
              >
                <SwiperSlide className="w-full" style={{ background: "lightblue", height: 215, borderRadius: '20px' }}>
                  <Image width={580} height={215}
                    className="rounded-md cursor-pointer w-full" src={'/images/home/img3.jpg'} alt=""></Image>
                </SwiperSlide>
                <SwiperSlide className="w-full" style={{ background: "lightblue", height: 215, borderRadius: '20px' }}>
                  <Image width={580} height={215}
                    className="rounded-md cursor-pointer w-full" src={'/images/home/img4.jpg'} alt=""></Image>
                </SwiperSlide>
                <SwiperSlide className="w-full" style={{ background: "lightblue", height: 215, borderRadius: '20px' }}>
                  <Image width={580} height={215}
                    className="rounded-md cursor-pointer w-full" src={'/images/home/img5.jpg'} alt=""></Image>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[680px] bg-gray-100 pt-[100px]">
        <div className="max-w-[1206px] mx-auto leading-none">
          <div className="text-[45px] text-orange-400 ml-[-40px]">
            {t('item15')}
            <br />
            <strong>{t('item16')}</strong>
          </div>
          <div className="mt-[80px]">
            <div className="flex justify-center">
              <a href="void:0" className="w-[200px]"><img src="/images/home/img6.png" className="grayscale hover:grayscale-0" alt="" /></a>
              <a href="void:0" className="w-[75px] ml-[50px]"><img src="/images/home/img7.png" className="grayscale hover:grayscale-0" alt="" /></a>
              <a href="void:0" className="w-[55px] ml-[50px]">
                <img src="/images/home/img8.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
              <a href="void:0" className="w-[80px] ml-[50px]">
                <img src="/images/home/img9.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
              <a href="void:0" className="w-[95px] ml-[50px]">
                <img src="/images/home/img10.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
              <a href="void:0" className="w-[90px] ml-[50px]">
                <img src="/images/home/img11.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
            </div>
            <div className="mt-[80px] flex justify-center items-center">
              <a href="void:0" className="w-[180px]"><img src="/images/home/img12.png" className="grayscale hover:grayscale-0" alt="" /></a>
              <a href="void:0" className="w-[290px] ml-[50px]"><img src="/images/home/img13.png" className="grayscale hover:grayscale-0" alt="" /></a>
              <a href="void:0" className="w-[180px] ml-[50px]">
                <img src="/images/home/img14.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
              <a href="void:0" className="w-[90px] ml-[50px]">
                <img src="/images/home/img15.png" className="grayscale hover:grayscale-0" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[450px] bg-[url('/bg2.jpg')] bg-no-repeat bg-fixed bg-cover">
        <div className="w-[515px] h-[140px]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            loop
          >
            <SwiperSlide className="w-full" style={{ background: "lightblue", height: 140, borderRadius: '20px' }}>
              <Image width={515} height={140}
                className="rounded-md cursor-pointer w-full" src={'/images/home/img16.png'} alt=""></Image>
            </SwiperSlide>
            <SwiperSlide className="w-full" style={{ background: "lightblue", height: 140, borderRadius: '20px' }}>
              <Image width={515} height={140}
                className="rounded-md cursor-pointer w-full" src={'/images/home/img17.png'} alt=""></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="h-[696px] bg-[url('/bg3.jpg')] bg-no-repeat bg-fixed bg-cover"></div>
      <div className="h-[278px] bg-[url('/bg4.jpg')] bg-no-repeat bg-fixed bg-cover"></div>
    </main>
  );
}
