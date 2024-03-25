'use client'
import { useTranslation } from "@/app/i18n/client"
import { Breadcrumb } from "antd";
import Location from "@/app/components/Location";
export default function page({ params: { lng } }: { params: { lng: string } }) {
    // const [key, setKey] = useState(0)
    const { t } = useTranslation(lng, 'locations')
    const { t: t1 } = useTranslation(lng, 'header')
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
                    title: t1('menu6'),
                    href: `void:0`,
                }
            ]} />
        <div className="flex justify-between mt-[60px] gap-[50px] mb-[50px]">
            <div className="text-[30px] text-slate-400 w-[300px]">{t1('menu6')}</div>
            <div className="text-[18px] leading-[28px] flex-1">
                <Location lang={lng} namespace={'locations'} active={1} />
            </div>
        </div>
    </div>;
}
