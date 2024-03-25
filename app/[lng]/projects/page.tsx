import { useTranslation } from "@/app/i18n/index"
import Image from 'next/image'
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'projects')
    return (
        <main>
            <div className="h-[500px] bg-[url('/images/project/img1.jpg')] bg-cover relative">
            </div>

            <div className="relative max-w-[1206px] mx-auto">
                <div className="text-[34px] w-[790px] right-[0] text-orange-600 mx-auto absolute top-[-60px] rounded-[10px] py-[35px] px-[70px] bg-[url('/images/project/img2.png')] bg-cover bg-no-repeat">
                    <strong>{t('item2')}</strong>
                </div>
            </div>
            <div className="bg-[url('/bg1.jpg')] bg-fixed bg-cover bg-no-repeat pt-[100px]">
                <div className="mx-auto w-[950px] text-[20px]">
                    <div className="pl-[90px]"><strong>{t('item1')}</strong></div>
                </div>
                <div className="max-w-[1206px] mx-auto flex justify-start mt-[80px]">
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item3')}</div>
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item4')}</div>
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item5')}</div>
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item6')}</div>
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item7')}</div>
                    <div className="h-[50px] mr-[10px] py-[10px] px-[30px] bg-white text-gray-400 underline text-[18px] cursor-pointer hover:no-underline">{t('item8')}</div>
                </div>
            </div>
        </main>
    );
}
