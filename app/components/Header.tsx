import Link from "next/link";

export default function Header({lng}:any) {

    return <header className="h-149 w-full fixed top-0 left-0 right-0 bg-white">
        <div className="h-35 mx-auto max-w-[1206px] flex justify-end">
            <ul className="text-slate-400 text-xs flex items-center">
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">Press Contact</li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">News</li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">DE</li>
                <li className="underline underline-offset-1 mr-3.5 cursor-pointer">EN</li>
                <li className="underline underline-offset-1 cursor-pointer">UA</li>
            </ul>
        </div>
        <div className="mx-auto max-w-[1206px] flex justify-between items-center">
            <Link href='/'><img className="h-114" src="/logo.png" alt="" /></Link>
            <ul className="flex justify-between text-slate-400 h-114 w-[340px]">
                <li className="relative cursor-pointer h-full leading-[114px] group">
                Company
                <ul className="absolute cursor-auto bg-[#005f66] t-[114px] w-[340px] h-fit py-[24px] pl-[24px] invisible group-hover:visible">
                    <li className="h-[40px] text-white leading-[40px] cursor-pointer">Philosophy</li>
                    <li className="h-[40px] text-white leading-[40px] cursor-pointer">Managing Director</li>
                    <li className="h-[40px] text-white leading-[40px] cursor-pointer">Locations</li>
                    <li className="h-[40px] text-white leading-[40px] cursor-pointer">Contact</li>
                </ul>
                </li>
                <li className="cursor-pointer h-full leading-[114px]">Competencies</li>
                <li className="cursor-pointer h-full leading-[114px]">Projects</li>
            </ul>
        </div>
    </header>
}