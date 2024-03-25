import { useTranslation } from "../i18n";
import Image from 'next/image'
export default async function NewsCard({ lang, namespace }: any) {
    const { t } = await useTranslation(lang, namespace)

    return <div className="w-[378px] h-[430px] bg-white rounded-xl border-b-2 border-orange-400 group">
        <div className="cursor-pointer relative">
            <Image src={'/images/home/img18.png'} alt="" width={400} height={250}></Image>
            <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-90 group-hover:border-b-[1px] group-hover:border-slate-100">
                <span className="icon-[majesticons--plus-circle] text-orange-400 text-[40px]"></span>
            </div>
        </div>
        <div className="p-[19px] text-[18px] pb-[29px] border-slate-100 border-b-[1px]">
            {t('item21')}
        </div>
        <div className="p-[19px] text-orange-400 text-[24px]">
            {t('item22')}
        </div>
    </div>
}