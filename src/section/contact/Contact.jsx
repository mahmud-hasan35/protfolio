import { PiTelegramLogo } from "react-icons/pi";
import { MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <> <div className="bg-stone-400 p-4 mt-6">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <div className="grid grid-cols-3 py-6 border-b-2">
                <div className="text-center bg-slate-600 text-white">
                    <MdEmail className="mx-auto text-4xl py-1" />
                    <span>Email.@com</span>
                </div>
                <div className="text-center bg-indigo-600 text-white">
                    <FaLocationDot className="mx-auto text-4xl py-1 " />
                    <span>My Location</span>
                </div>
                <div className="text-center bg-orange-800 text-white">
                    <MdOutlineLocalPhone className="mx-auto text-4xl py-1 " />
                    <span>01780544535</span>
                </div>
            </div>
            <div className="py-4">
                <span>Name</span>
                <input className="w-full py-2 mb-2" type="text" />
                <span>Email</span>
                <input className="w-full py-2 mb-2" type="text" />
                <span>Message</span>
                <input className="w-full py-2 mb-4" type="text" />
                <button className="bg-blue-500 text-white py-2 px-4 flex items-center gap-2 ">
                    <PiTelegramLogo className="text-xl" />Send Message</button>
            </div>
        </div>
        </>
    )
}
