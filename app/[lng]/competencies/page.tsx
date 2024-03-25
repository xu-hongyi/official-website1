import { useTranslation } from "@/app/i18n/index"
import { Breadcrumb } from "antd";
import Link from "next/link";
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'competencies')
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
                    title: t1('menu8'),
                    href: 'void:0',
                }
            ]} />
        <div className="flex justify-between mt-[300px] gap-[30px] mb-[20px]">
            <div className="text-[30px] text-slate-400 w-[300px]">{t1('menu8')}</div>
            <div className="text-[18px] leading-[28px] flex-1">
                <p className="mb-[18px]"><strong>{t('item1')}</strong> {t('item2')}</p>
                <p className="mb-[18px]">{t('item3')}</p>
            </div>
        </div>
    </div>;
}
