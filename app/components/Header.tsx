import Link from "next/link";
import { useTranslation } from "../i18n/index";

export default async function Header({ lng }: any) {
    const { t } = await useTranslation(lng, 'header')

    return <header className="h-149 w-full fixed top-0 left-0 right-0 bg-white">
        <div className="h-35 mx-auto max-w-[1206px] flex justify-end">
            <ul className="text-slate-400 text-xs flex items-center">
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={'/press-contact'}>{t('menu1')}</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={'/news'}>{t('menu2')}</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={'/de'}>DE</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={'/en'}>EN</Link>
                </li>
                <li className="underline underline-offset-1 cursor-pointer">
                    <Link href={'/ua'}>UA</Link>
                </li>
            </ul>
        </div>
        <div className="mx-auto max-w-[1206px] flex justify-between items-center">
            <Link href='/'><img className="h-114" src="/logo.png" alt="" /></Link>
            <ul className="flex justify-between text-slate-400 h-114 w-[340px]">
                <li className="relative cursor-pointer h-full leading-[114px] group">
                    {t('menu3')}
                    <ul className="absolute cursor-auto bg-orange-400 t-[114px] w-[340px] h-fit py-[24px] pl-[24px] invisible group-hover:visible">
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={'/company/philosophy'}>{t('menu4')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={'/company/managing-director'}>{t('menu5')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={'/company/locations'}>{t('menu6')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={'/company/contact'}>{t('menu7')}</Link>
                        </li>
                    </ul>
                </li>
                <li className="cursor-pointer h-full leading-[114px]">
                    <Link href={'/competencies'}>{t('menu8')}</Link>
                </li>
                <li className="cursor-pointer h-full leading-[114px]">
                    <Link href={'/projects'}>{t('menu9')}</Link>
                </li>
            </ul>
        </div>
    </header>
}