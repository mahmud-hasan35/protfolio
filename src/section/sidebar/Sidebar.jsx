import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoMan } from "react-icons/io5";
import { LuGrid2X2 } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import images from "../../../public/mahmud 2024-jpg.jpg"


export default function Sidebar() {
    return (
        <>
            <div className=" container mx-auto h-screen col-span-3 bg-slate-50 shadow-md p-5 sticky top-0 ">
                <img className="w-28 h-28 rounded-full" src={images} alt="image" />
                <h2 className=" text-slate-800 font-bold mt-4 text-2xl">PORTFOLIO</h2>
                <ul className=" mb-2 cursor-pointer">
                    <li className="flex items-center mt-4">
                        <LuGrid2X2 className="text-2xl" />
                        <span className="text-black px-3 hover:color-green">PORTFOLIO</span>
                    </li>
                    <li className="flex items-center mt-4">
                        <IoMan className="text-2xl" />
                        <span className="text-black px-3 hover:color-green">ABOUT ME</span>
                    </li>
                    <li className="flex items-center mt-4">
                        <MdContactPhone className="text-2xl" />
                        <span className="text-black px-3 hover:color-green">CONTACT ME</span>
                    </li>
                    <li className="flex items-center mt-6 cursor-pointer text-xl text-indigo-900">
                        <FaFacebookF />
                        <FaInstagram className="ml-1" />
                        <FaLinkedinIn className="ml-1" />
                        <FaUpwork className="ml-1" />
                        <FiGithub className="ml-1" />

                    </li>
                </ul>
            </div>
        </>
    )
}
