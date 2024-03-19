import { useTranslation } from "@/app/i18n/index"
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng)
    return (
        <main>

        </main>
    );
}
