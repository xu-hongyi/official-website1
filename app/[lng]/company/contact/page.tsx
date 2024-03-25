import { useTranslation } from "@/app/i18n/index"
import { Breadcrumb } from "antd";
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'contact')
    const { t: t1 } = await useTranslation(lng, 'header')
    const { t: t2 } = await useTranslation(lng, 'footer')
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
                    title: t1('menu7'),
                    href: `void:0`,
                }
            ]} />
        <div className="flex justify-between mt-[60px] gap-[50px] mb-[50px]">
            <div className="w-[300px]">
                <span className="text-[30px] text-slate-400">{t1('menu7')}</span>
                <br />
                <p className="text-[18px] text-orange-600 leading-8 mt-[30px]">{t2('item1')}</p>
                <p className="text-[18px] text-orange-600 leading-8">{t2('item2')}</p>
                <p className="text-[18px] text-orange-600 leading-8">{t2('item3')}</p>
                <p className="text-[18px] text-orange-600 leading-8">{t2('item4')}</p>
                <br />
                <p className="text-[18px] text-orange-600 leading-8">{t2('phone1')}</p>
                <p className="text-[18px] text-orange-600 leading-8">{t2('phone2')}</p>
                <p className="text-[18px] text-orange-600 leading-8">{t2('email')}</p>
            </div>
            <div className="text-[18px] leading-[28px] flex-1">
                <div className="flex justify-start mb-[20px]">
                    <input
                        type="text"
                        placeholder={t('item1')}
                        className="w-[280px] h-[49px] mr-[40px] p-[16px] text-[14px] text-[#999] bg-[#eaeaea] placeholder: focus:outline-none" />
                    <input type="text"
                        placeholder={t('item2')}
                        className="w-[280px] h-[49px] p-[16px] text-[14px] text-[#999] bg-[#eaeaea] placeholder: focus:outline-none" />
                </div>
                <div className="mb-[20px]">
                    <input
                        type="text"
                        placeholder={t('item3')}
                        className="w-[280px] h-[49px] p-[16px] text-[14px] text-[#999] bg-[#eaeaea] placeholder: focus:outline-none" />
                </div>
                <div>
                    <textarea
                        placeholder={t('item4')}
                        className="w-[600px] h-[150px] overflow-hidden leading-5 p-[16px] text-[14px] text-[#999] bg-[#eaeaea] placeholder: focus:outline-none"
                    ></textarea>
                </div>
                <div className="flex justify-end w-[600px]">
                    <button className="text-orange-600 border-orange-600 border-solid border-2 rounded text-[20px] leading-7 py-[6px] px-[14px]">{t('item5')}</button>
                </div>
            </div>
        </div>
    </div>;
}
