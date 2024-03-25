import { useTranslation } from "@/app/i18n/index"
import Image from 'next/image'
import News from "../components/News";
import Carouset from "../components/Carousel";
export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, 'home')
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
              <Carouset
                imgList={['/images/home/img3.jpg', '/images/home/img4.jpg', '/images/home/img5.jpg']}
                width={580}
                height={215}
                namespace="home"
                pagination
              />
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
        <div className="flex max-w-[1206px] mx-auto leading-none py-[40px] justify-between gap-[60px]">
          <div className="w-[515px] h-[140px] bg-transparent mt-[20px]">
            <Carouset
              imgList={['/images/home/img16.png', '/images/home/img17.png']}
              width={515}
              height={140}
              namespace="home"
            />
          </div>
          <div>
            <div className="bg-white rounded-xl p-[30px]">
              <p className="text-[34px] text-orange-400">{t('item17')}</p>
              <p className="mt-[20px] text-[22px] leading-[30px]">{t('item18')}</p>
            </div>
            <div className="rounded-xl h-[60px] bg-[#9AA921] w-fit p-[20px] mt-[20px] text-[20px] text-white flex items-center cursor-pointer group/item">
              {t('item19')}
              <span className="icon-[fluent--chevron-right-24-regular] ml-[10px] text-[24px] hidden  group-hover/item:inline-block"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[696px] bg-[url('/bg3.jpg')] bg-no-repeat bg-fixed bg-cover pt-[30px]">
        <div className="max-w-[1206px] mx-auto">
          <strong className="text-[45px] text-orange-400 ml-[-40px]">{t('item20')}</strong>
        </div>
        <div className="max-w-[1206px] mx-auto flex justify-around">
          <News namespace="home" lang={lng}></News>
          <News namespace="home" lang={lng}></News>
          <News namespace="home" lang={lng}></News>
        </div>
        <div className="max-w-[1206px] mx-auto flex justify-center mt-[60px]">
          <div className="px-[30px] h-[46px] flex items-center cursor-pointer text-white rounded bg-orange-600 group text-center leading-[46px] text-[20px]">
            {t('item23')}
            <span className="icon-[fluent--chevron-right-24-regular] ml-[10px] text-[24px] hidden group-hover:inline-block"></span>
          </div>
        </div>
      </div>
      <div className="h-[278px] py-[40px] bg-[url('/bg4.jpg')] bg-no-repeat bg-fixed bg-cover">
        <div className="max-w-[1206px] mx-auto flex justify-between text-white">
          <div>
            <div className="text-[40px] leading-none">{t('item24')}</div>
            <div className="text-[42px] leading-none"><strong>{t('item25')}</strong></div>
            <br />
            <div className="text-[24px] leading-none">{t('item26')}</div>
            <div className="text-[26px] leading-none"><strong>{t('item27')}</strong></div>
          </div>
          <div className="flex items-center justify-center grow">
            <div className="ml-[40px] cursor-pointer"><Image className="grayscale hover:grayscale-0" src={'/images/home/img19.png'} alt="" width={100} height={140}></Image></div>
            <div className="ml-[40px] cursor-pointer"><Image className="grayscale hover:grayscale-0" src={'/images/home/img20.jpg'} alt="" width={111} height={140}></Image></div>
            <div className="ml-[40px] cursor-pointer"><Image className="grayscale hover:grayscale-0" src={'/footer.png'} alt="" width={127} height={127}></Image></div>
            <div className="ml-[40px] cursor-pointer"><Image className="grayscale hover:grayscale-0" src={'/images/home/img21.png'} alt="" width={127} height={127}></Image></div>
          </div>
        </div>
      </div>
    </main>
  );
}
