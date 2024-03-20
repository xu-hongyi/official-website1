import { useTranslation } from "@/app/i18n/index"
export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)
  return (
    <main>
      <div className="h-[500px] mb-[8px] bg-black"></div>
      <div className=""></div>
      <div className="bg-[url('/bg1.jpg')] bg-no-repeat bg-fixed bg-cover h-[1400px]"></div>
      <div className="h-[785px]"></div>
      <div className="h-[680px] bg-slate-600"></div>
      <div className="h-[450px] bg-[url('/bg2.jpg')] bg-no-repeat bg-fixed bg-cover"></div>
      <div className="h-[696px] bg-[url('/bg3.jpg')] bg-no-repeat bg-fixed bg-cover"></div>
      <div className="h-[278px] bg-[url('/bg4.jpg')] bg-no-repeat bg-fixed bg-cover"></div>
    </main>
  );
}
