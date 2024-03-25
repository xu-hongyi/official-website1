'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../i18n/client";

export default function Header({ lng }: any) {
    const [t] = useTranslation(lng, 'header')
    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    return <header className="h-149 w-full fixed top-0 left-0 right-0 bg-white z-[999] border-b-[1px] border-gray-200">
        <div className="h-35 mx-auto max-w-[1206px] flex justify-end">
            <ul className="text-slate-400 text-xs flex items-center">
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={`/${lng}/news`}>{t('menu2')}</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={redirectedPathName('zh')}>CN</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={redirectedPathName('de')}>DE</Link>
                </li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">
                    <Link href={redirectedPathName('en')}>EN</Link>
                </li>
            </ul>
        </div>
        <div className="mx-auto max-w-[1206px] flex justify-between items-center">
            <Link href='/' className="mb-[1px]"><img className="h-113" src="/logo.png" alt="" /></Link>
            <ul className="flex justify-between text-slate-400 h-114 w-[340px] text-[20px]">
                <li className="relative cursor-pointer h-full leading-[114px] group">
                    <div className="flex items-center">
                        <Link href={`/${lng}/company`}>{t('menu3')}</Link>
                        <span className="icon-[tdesign--chevron-down-s] text-amber-600 ml-[10px]"></span>
                    </div>
                    <ul className="absolute cursor-auto bg-orange-400 t-[114px] w-[340px] h-fit py-[24px] pl-[24px] invisible group-hover:visible">
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={`/${lng}/company/philosophy`}>{t('menu4')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={`/${lng}/company/founding-members`}>{t('menu5')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={`/${lng}/company/locations`}>{t('menu6')}</Link>
                        </li>
                        <li className="h-[40px] text-white leading-[40px] cursor-pointer">
                            <Link href={`/${lng}/company/contact`}>{t('menu7')}</Link>
                        </li>
                    </ul>
                </li>
                <li className="cursor-pointer h-full leading-[114px]">
                    <Link href={`/${lng}/competencies`}>{t('menu8')}</Link>
                </li>
                <li className="cursor-pointer h-full leading-[114px]">
                    <Link href={`/${lng}/industry`}>{t('menu9')}</Link>
                </li>
            </ul>
        </div>
    </header>
}