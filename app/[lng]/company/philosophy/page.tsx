import { useTranslation } from "@/app/i18n/index"
import { Breadcrumb } from "antd";
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'philosophy')
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
                    href: `/${lng}/company/philosophy`,
                }
            ]} />
        <div className="flex justify-between mt-[60px] gap-[50px] mb-[20px]">
            <div className="text-[30px] text-slate-400 w-[300px]">{t1('menu4')}</div>
            <div className="text-[18px] leading-[28px] flex-1">
                <p className="mb-[18px]"><strong>{t('item1')}</strong> {t('item2')} <strong>{t('item3')}</strong> {t('item4')} <strong>{t('item3')}</strong> {t('item5')}</p>
                <p className="mb-[18px]">{t('item6')} <strong>{t('item3')}</strong> {t('item7')}</p>
                <p className="mb-[18px]">{t('item8')}</p>
                <p className="mb-[18px]">{t('item9')} <strong>{t('item3')}</strong> {t('item10')}</p>
            </div>
        </div>
    </div>;
}
