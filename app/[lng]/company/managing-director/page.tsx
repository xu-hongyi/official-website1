import { useTranslation } from "@/app/i18n/index"
import { Breadcrumb } from "antd";
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'managing-director')
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
                    href: `/${lng}/company`,
                },
                {
                    title: t1('menu4'),
                    href: `/${lng}/company/managing-director`,
                }
            ]} />
        <div className="flex justify-between mt-[60px] gap-[50px] mb-[50px]">
            <div className="text-[30px] text-slate-400 w-[300px]">{t1('menu5')}</div>
            <div className="text-[18px] leading-[28px] flex-1">
                <p className="text-orange-600 text-[24px] mb-[60px]">{t('item2')}</p>
                <p className="mb-[18px]">{t('item3')}</p>
                <p className="mb-[18px]">{t('item4')}</p>
                <p className="mb-[18px]">{t('item5')}</p>
                <p className="mb-[18px]">{t('item6')}</p>
            </div>
        </div>
    </div>;
}
