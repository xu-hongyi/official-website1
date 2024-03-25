import Image from 'next/image'
import { useTranslation } from '../i18n/client'
export default function Location({ lang, namespace, active }: any) {
    const { t } = useTranslation(lang, namespace)
    return <div className={`${active ? 'max-h-[900px]' : 'max-h-[70px]'}  overflow-hidden cursor-pointer border-[2px] w-[584px] p-[20px] rounded border-orange-600 group delay-100 transition-[max-height]`}>
        <p className="mb-[20px] flex justify-between items-center">
            {t('item1')}
            <span className={`${active ? 'invisible' : 'visible'} text-slate-300 icon-[fluent--subtract-circle-24-filled]`}></span>
        </p>
        <Image className="mb-[30px]" src={'/images/home/img4.jpg'} alt="" width={540} height={211}></Image>
        <p className="text-amber-600 mb-[10px]"><strong>{t('item2')}</strong></p>
        <p className="mb-[10px]">{t('item3')}</p>
        <p className="mb-[30px]">{t('item4')}</p>
        <Image className="mb-[30px]" src={'/images/company/img1.jpg'} alt="" height={297} width={540}></Image>
        <p className="h-1 w-full mb-[10px] bg-gray-400"></p>
        <p className="mb-[10px]">{t('item5')} <span className="cursor-pointer underline text-orange-600"><a href={`mailto:${t('item6')}`}>{t('item6')}</a></span></p>
        <p className="mb-[10px]">{t('item7')}</p>
        <p>{t('item8')}</p>
    </div>
}