import { useTranslation } from "../i18n"

export default async function Footer({ lng }: any) {
    const { t } = await useTranslation(lng, 'footer')
    return <footer className="bg-orange-400 w-full pt-[66px] pb-[40px]">
        <ul className="mx-auto max-w-[1206px] h-full flex text-[18px]">
            <li className="grow">
                <img width={95} src="/logo.png" alt="" />
            </li>
            <li className="grow">
                {t('item1')}
                <br />
                {t('item2')}
                <br />
                {t('item3')}
                <br />
                <br />
                {t('phone1')}
                <br />
                {t('phone2')}
                <br />
                <a href="mailto:info@aconium.eu">{t('email')}</a>
            </li>
            <li className="grow">
                {t('item4')}
                <br />
                {t('item5')}
                <br />
                {t('item6')}
            </li>
            <li className="grow flex justify-center items-start">
                <img width={214} src="/footer.png" alt="" />
            </li>
        </ul>
    </footer>
}