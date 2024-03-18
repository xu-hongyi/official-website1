'use client'

import Link from "next/link"
import { useTranslation } from "../i18n/client"

export default function Footer({ lng }: any) {
    const [t] = useTranslation(lng)

    return <ul>
        <li><Link href={'/zh'}>{t('zh')}</Link></li>
        <li><Link href={'/en'}>{t('en')}</Link></li>
    </ul>
}