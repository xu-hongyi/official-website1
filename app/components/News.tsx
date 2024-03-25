import Link from "next/link";
import { useTranslation } from "../i18n";
import Image from 'next/image'
export default async function NewsCard({ lang, namespace, id }: any) {
    const { t } = await useTranslation(lang, namespace)

    return <div className="w-full h-[430px] overflow-hidden bg-white rounded-xl border-b-2 border-orange-400 group">
        <div className="cursor-pointer relative">
            <Link href={`/${lang}/news/${id}`}>
                <Image src={'/images/home/img18.png'} alt="" width={400} height={250}></Image>
                <div className="absolute inset-x-0 inset-y-0 flex justify-center items-center bg-white opacity-0 group-hover:bg-orange-50 group-hover:opacity-90">
                    <span className="icon-[majesticons--plus-circle] text-orange-400 text-[40px]"></span>
                </div>
            </Link>
        </div>
        <div className="p-[19px] text-[20px] pb-[29px] border-slate-100">
            {t('item21')}
        </div>
        <div className="p-[19px] text-orange-400 text-[18px]">
            {t('item22')}
        </div>
    </div>
}