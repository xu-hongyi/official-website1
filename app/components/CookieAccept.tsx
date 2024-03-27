import { useTranslation } from "../i18n"
export default async function CookieAccept({ lng }: any) {
    const { t } = await useTranslation(lng, 'cookie')

    return <div className="fixed bottom-0 left-0 ring-0 bg-white h-[400px] w-full z-[9999] flex justify-center">
        <div className="w-[700px] text-black pt-[20px]">
            <p><strong>{t('item1')}</strong></p>
            <p className="text-[12px]">{t('item2')}</p>
            <br />
            <p className="text-[12px]">{t('item3')}</p>
            <br />
            <p className="text-[12px]">{t('item4')}</p>
        </div>
    </div>
}