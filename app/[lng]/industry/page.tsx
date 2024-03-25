import { useTranslation } from "@/app/i18n/index"
import Image from 'next/image'
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'industry')
    return (
        <main>
            <div className="h-[500px] bg-[url('/images/industry/img1.jpg')] bg-cover relative">
            </div>

            <div className="relative max-w-[1206px] mx-auto">
                <div className="text-[34px] w-[790px] right-[0] text-orange-600 mx-auto absolute top-[-60px] rounded-[10px] py-[35px] px-[70px] bg-[url('/images/industry/img2.png')] bg-cover bg-no-repeat">
                    <strong>{t('item2')}</strong>
                </div>
            </div>
            <div className="bg-[url('/bg1.jpg')] bg-fixed bg-cover bg-no-repeat pt-[100px] pb-[60px]">
                <div className="mx-auto w-[950px] text-[20px]">
                    <div className="pl-[90px]"><strong>{t('item1')}</strong></div>
                </div>
                <div className="max-w-[1206px] mx-auto mt-[80px] grid grid-cols-3 gap-8">
                    <div className="w-full h-[450px] bg-white rounded-xl p-[20px] border-orange-600 border-b-2">
                        <Image height={150} width={200} className="mx-auto" src={'/images/industry/img3.png'} alt="" />
                        <div className="text-[20px] mt-[30px]">
                            {t('item9')}
                        </div>
                        <div className="text-[18px] text-orange-600 mt-[60px]">
                            {t('item10')}
                        </div>
                    </div>
                    <div className="w-full h-[450px] bg-white rounded-xl p-[20px] border-orange-600 border-b-2">
                        <Image height={150} width={200} className="mx-auto" src={'/images/industry/img3.png'} alt="" />
                        <div className="text-[20px] mt-[30px]">
                            {t('item9')}
                        </div>
                        <div className="text-[18px] text-orange-600 mt-[60px]">
                            {t('item10')}
                        </div>
                    </div>
                    <div className="w-full h-[450px] bg-white rounded-xl p-[20px] border-orange-600 border-b-2">
                        <Image height={150} width={200} className="mx-auto" src={'/images/industry/img3.png'} alt="" />
                        <div className="text-[20px] mt-[30px]">
                            {t('item9')}
                        </div>
                        <div className="text-[18px] text-orange-600 mt-[60px]">
                            {t('item10')}
                        </div>
                    </div>
                    <div className="w-full h-[450px] bg-white rounded-xl p-[20px] border-orange-600 border-b-2">
                        <Image height={150} width={200} className="mx-auto" src={'/images/industry/img3.png'} alt="" />
                        <div className="text-[20px] mt-[30px]">
                            {t('item9')}
                        </div>
                        <div className="text-[18px] text-orange-600 mt-[60px]">
                            {t('item10')}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
