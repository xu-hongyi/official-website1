import { useTranslation } from "@/app/i18n/index"
import { Breadcrumb } from "antd";
import Link from "next/link";
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'company')
    const { t: t1 } = await useTranslation(lng, 'header')
    return <div className="max-w-[1206px] mx-auto leading-none pt-[40px]">
        <Breadcrumb
            separator={<span className="h-[24px] icon-[flowbite--chevron-double-right-outline]"></span>}
            items={[
                {
                    title: t1('menu10'),
                    href: `/${lng}`
                },
                {
                    title: t1('menu3'),
                    href: 'void:0',
                }
            ]} />
        <div className="flex justify-between mt-[300px] gap-[30px] mb-[20px]">
            <div className="text-[30px] text-slate-400 w-[300px]">{t1('menu3')}</div>
            <div className="text-[18px] leading-[28px] flex-1">
                <p className="mb-[18px]"><strong>{t('item2')}</strong> {t('item3')}</p>
                <p className="mb-[18px]">{t('item4')} <Link href={`/${lng}`} className="text-orange-600 underline">{t('item5')}</Link></p>
                <p className="mb-[18px]">{t('item6')} <Link href={`/${lng}/company/philosophy`} className="text-orange-600 underline">{t('item7')}</Link></p>
                <p className="mb-[18px]">{t('item8')} <Link href={`/${lng}/company/contact`} className="text-orange-600 underline">{t('item9')}</Link> {t('item10')}</p>
            </div>
        </div>
    </div>;
}
