import { GiArtilleryShell } from "react-icons/gi";
import { IoMdPhotos } from "react-icons/io";
import { SiMercedes } from "react-icons/si";


export default function Header() {
    return (
        <div>
            <h1 className="text-4xl text-indigo-950 font-bold font-sans mb-4">MY PORTFOLIO</h1>

            <ul className="flex border-b-8 py-3 ">
                <li className="mr-4">
                    <span className="text-lg ">Filter:</span>
                    <button className="bg-black text-white py-1 px-3 rounded ml-2">ALL</button>
                </li>
                <li className="flex gap-3">
                    <button className="bg-cyan-700 text-white py-1 px-3 rounded flex items-center gap-3"> <SiMercedes />Design</button>
                    <button className="bg-blue-600 text-white py-1 px-4 rounded flex items-center gap-3"> <IoMdPhotos />Photos</button>
                    <button className="bg-indigo-600 text-white py-1 px-4 rounded flex items-center gap-3"> <GiArtilleryShell />Art</button>
                </li>
            </ul>

        </div>
    )
}
