import { useTranslation } from "@/app/i18n";
import Image from 'next/image'
export default async function page({ params: { lng, id } }: { params: { lng: string, id: string } }) {
    const { t } = await useTranslation(lng)
    return (
        <main className="bg-slate-100 py-[60px]">
            <div className="mx-auto max-w-[1206px] flex bg-slate-100">
                <div className="w-[70%] mr-[30px] p-[20px] bg-white">
                    <div className="text-[32px] text-[#848383]">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                    <div className="text-[18px] text-[#848383]">29.01.2024</div>
                    <div className="w-full relative h-[480px]">
                        <img src="/images/news/img1.png" height={480} alt="" />
                    </div>
                    <p className="text-[18px]">
                        Europe’s largest trade fair focusing on FTTH (fibre to the home) is just around the corner. This year’s event will take place in Berlin from Tuesday, 19 March to  Thursday, 21 March – and it promises to be a top-class event already.
                    </p>
                    <br />
                    <p className="text-[18px]">
                        A large number of international representatives from the telecommunications industry and local authorities, delegates, investors and politicians have already announced their attendance – including Volker Wissing, Federal Minister for Digital and Transport.
                    </p>
                    <br />
                    <p className="text-[18px]">The conference provides a platform for dialogue on the latest FTTH technologies, products and services. As a premium partner of the FTTH Conference and an established player in the expansion of gigabit-networks in Germany, we are also taking part in this industry-defining event. We will be bringing along innovations developed by our techhub team so that visitors can get a hands-on experience. Our technology experts will be on hand to discuss topics such as GIS, digital twins and the benefits they bring.</p>
                    <br />
                    <p className="text-[18px]">On 19 March 2024, aconium GmbH is organising and hosting the tenth Governmental Day Workshop as part of the FTTH Conference. The workshop offers an interactive platform for broadband stakeholders in the EU. It addresses the many challenges that the expansion of gigabit-networks in rural regions poses for local and regional authorities. Furthermore, it informs stakeholders about political developments at the European level, shows possible solutions to the given challenges and facilitates an intensive exchange.</p>
                    <br />
                    <p className="text-[18px]">Click here for the programme:</p>
                    <br />
                    <p className="text-[18px]">In addition to the exhibition, which will feature over 100 exhibitors and partners, the traditional FTTH Awards and the newly introduced FTTH Innovation Awards will also be presented.</p>
                    <br />
                    <p className="text-[18px]">Here are the most important dates:</p>
                    <br />
                    <p className="text-[18px] text-center">
                        <strong>FTTH Conference 2024</strong>
                    </p>
                    <p className="text-[18px] text-center">
                        <strong>Where: hub27, Messe Berlin</strong>
                    </p>
                    <p className="text-[18px] text-center">
                        <strong>When: 19 – 21 March 2024</strong>
                    </p>
                    <br />
                    <p className="text-[18px]">Click here for more information and registration: <span className="underline text-orange-600 cursor-pointer">https://ftthconference.eu/</span></p>
                    <br />
                    <p className="text-[18px] underline text-orange-600 cursor-pointer">Click here for early bird tickets.</p>
                    <br />
                    <p className="text-[18px]">Your 20 per cent discount code is F24PTACN – simply enter the code at the end of the registration (Registration Order Summary section) under “Enter your Discount code here” and click “apply”.</p>
                    <br />
                </div>

                <div className="w-[30%]">
                    <p className="text-[24px] text-zinc-700">New posts</p>
                    <br />
                    <div className="mb-[30px]">
                        <div className="underline text-orange-600 cursor-pointer">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                        <div className="text-[14px] text-slate-500">29. January 2024</div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="underline text-orange-600 cursor-pointer">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                        <div className="text-[14px] text-slate-500">29. January 2024</div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="underline text-orange-600 cursor-pointer">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                        <div className="text-[14px] text-slate-500">29. January 2024</div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="underline text-orange-600 cursor-pointer">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                        <div className="text-[14px] text-slate-500">29. January 2024</div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="underline text-orange-600 cursor-pointer">Playing on our home pitch: aconium at FTTH 2024 in Berlin</div>
                        <div className="text-[14px] text-slate-500">29. January 2024</div>
                    </div>
                </div>
            </div>
        </main>
    );
}