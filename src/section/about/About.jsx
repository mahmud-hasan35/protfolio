import { FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                    <img className="w-full h-auto" src="../public/avatar_g.jpg" alt="image" />
                </div>
                <div>
                    <img className="w-full h-auto" src="../public/me2.jpg" alt="image" />
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-3">About Me</h3>
                <p className="text-slate-600">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
            <h4 className="text-2xl py-6 font-semibold">Technical Skills</h4>

            <div>
                <span>Web Design</span>

                <div className=" flex justify-center items-center h-10 bg-slate-500 py-1 ">
                    <span className=" text-white">100%</span>
                </div>
            </div>

            <div>
                <span>Project Managment</span>
                <div className="grid grid-cols-12 py-1">
                    <div className="grid col-span-11  h-10 bg-slate-500 items-center">
                        <span className="text-center text-white">95%</span>
                    </div>
                    <div className="grid col-span-1 h-10 bg-slate-300">
                    </div>
                </div>
            </div>

            <div>
                <span>Figma</span>
                <div className="grid grid-cols-12 py-1">
                    <div className="grid col-span-10  h-10 bg-slate-500 items-center">
                        <span className="text-center text-white">90%</span>
                    </div>
                    <div className="grid col-span-2 h-10 bg-slate-300">
                    </div>
                </div>
            </div>
            {/* cv */}
            <div className="mt-8">
                <button className="bg-indigo-600 py-2 px-4 text-white rounded flex items-center gap-3"><FaDownload />Download CV</button>
            </div>

        </>
    )
}

