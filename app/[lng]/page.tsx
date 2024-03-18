import { useTranslation } from "@/app/i18n/index"
import Footer from "@/components/Footer";
import Link from "next/link";
export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <ul>
          <li><Link href={'/zh'}>{t('zh')}</Link></li>
          <li><Link href={'/en'}>{t('en')}</Link></li>
        </ul>
      </header>
      <h1> {t('initText')}</h1>
      <Footer></Footer>
    </main>
  );
}
