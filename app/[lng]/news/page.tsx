import NewsCard from "@/app/components/News";
import { useTranslation } from "@/app/i18n/index"
export default async function page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng)
    return (
        <main className="bg-[url('/bg1.jpg')] bg-no-repeat bg-fixed bg-cover">
            <div className="mx-auto mt-[40px] max-w-[1206px] w-[80%] h-fit pb-[40px]">
                <div className="text-orange-600 text-[45px] ml-[-40px] mb-[40px]"><strong>News</strong></div>
                <div className="grid grid-rows-3 grid-cols-3 gap-8">
                    {new Array(10).fill(1).map((item, index) => <NewsCard lang={lng} namespace='home' id={index} />)}
                </div>
            </div>
        </main>
    );
}
