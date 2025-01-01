
import { LuGrid2X2 } from "react-icons/lu";
import  imgaes from "../public/mahmud 2024-jpg.jpg";
import { IoMan } from "react-icons/io5";
import { MdContactPhone, MdEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaDownload, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaUpwork } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiMercedes } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { GiArtilleryShell } from "react-icons/gi";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

export default function App() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 gap-8 ">

          {/* sideBar */}
          <div className=" container mx-auto h-screen col-span-3 bg-slate-50 shadow-md p-5 sticky top-0 ">
            <img className="w-28 h-28 rounded-full" src={imgaes} alt="image" />
            <h2 className=" text-slate-800 font-bold mt-4 text-2xl">PORTFOLIO</h2>
            <ul className=" mb-2 cursor-pointer">
              <li className="flex items-center mt-4">
              <LuGrid2X2 className="text-2xl"/>
              <span className="text-black px-3 hover:color-green">PORTFOLIO</span>
              </li>
              <li className="flex items-center mt-4">
              <IoMan className="text-2xl"/>
              <span className="text-black px-3 hover:color-green">ABOUT ME</span>
              </li>
              <li className="flex items-center mt-4">
              <MdContactPhone className="text-2xl"/>
              <span className="text-black px-3 hover:color-green">CONTACT ME</span>
              </li>
              <li className="flex items-center mt-6 cursor-pointer text-xl text-indigo-900">
              <FaFacebookF />
              <FaInstagram className="ml-1"/>
              <FaLinkedinIn className="ml-1"/>
              <FaUpwork className="ml-1"/>
              <FiGithub className="ml-1"/>

              </li>
            </ul>
          </div>
          {/* Header */}
     
          <div className="container mx-auto bg-white shadow p-5 col-span-9 "> 
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

            {/* gallary */}

          <div className="grid grid-cols-3 py-8 gap-3">
            <div className="w-full h-full bg-indigo-600">
              <img src="../public/Mask Group4.png" alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fuga itaque numquam, nesciunt hic quae perferendis, excepturi exercitationem reiciendis, dolores expedita enim a ipsam aliquid porro esse eos illo adipisci.</p>
            </div>
            <div className="w-full h-full bg-green-400">
              <img src="../public/Mask Group5.png" alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fuga itaque numquam, nesciunt hic quae perferendis, excepturi exercitationem reiciendis, dolores expedita enim a ipsam aliquid porro esse eos illo adipisci.</p>

            </div>
            <div className="w-full h-full bg-yellow-400">
              <img src="../public/Mask Group6.png" alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fuga itaque numquam, nesciunt hic quae perferendis, excepturi exercitationem reiciendis, dolores expedita enim a ipsam aliquid porro esse eos illo adipisci.</p>

            </div>
            <div className="w-full h-full bg-yellow-400">
              <img src="../public/Mask Group6.png" alt="" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fuga itaque numquam, nesciunt hic quae perferendis, excepturi exercitationem reiciendis, dolores expedita enim a ipsam aliquid porro esse eos illo adipisci.</p>

            </div>
          </div>

              <div>
                <ul className="flex justify-center items-center gap-6">
                  <li>
                    <button className="hover:bg-slate-600 py-1 px-3 text-xl"><BiSkipPrevious /></button>
                  </li>
                  
                  <li>
                    <button className="hover:bg-slate-600 py-1 px-3 ">1</button>
                  </li>
                  <li>
                    <button className="hover:bg-slate-600 py-1 px-3">2</button>
                  </li>
                  <li>
                    <button className="hover:bg-slate-600 py-1 px-3">3</button>
                  </li>
                  <li>
                    <button className="hover:bg-slate-600 py-1 px-3 text-xl"><BiSkipNext /></button>
                  </li>
                
                </ul>
              </div>

              {/* about me  */}
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

                  {/* charge */}

                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold">How Much My Charge</h2>
                    </div>
                    <div className="grid grid-cols-3 mt-6 gap-3">

                      <div>
                        <div className="bg-green-500 text-center text-white py-6">
                          <span className="text-2xl">Basic</span>
                        </div>
                        <div className="bg-white shadow">
                          <ul className="text-center">
                            <li className="border-b-2 border-gray-100 py-3">Web Design</li>
                            <li className="border-b-2 border-gray-100 py-3">Photography</li>
                            <li className="border-b-2 border-gray-100 py-3">Mail Support</li>
                            <ul className="p-">
                            <li className=" py-3 text-3xl">$ 10</li>
                            <span className="text-xl">per month</span>
                            <div className="py-6">
                            <button className="bg-indigo-600 py-3 px-8 text-white rounded ">Sing Up</button>
                            </div>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="bg-green-500 text-center text-white py-6">
                          <span className="text-2xl">Basic</span>
                        </div>
                        <div className="bg-white shadow">
                          <ul className="text-center">
                            <li className="border-b-2 border-gray-100 py-3">Web Design</li>
                            <li className="border-b-2 border-gray-100 py-3">Photography</li>
                            <li className="border-b-2 border-gray-100 py-3">Mail Support</li>
                            <ul className="p-">
                            <li className=" py-3 text-3xl">$ 10</li>
                            <span className="text-xl">per month</span>
                            <div className="py-6">
                            <button className="bg-indigo-600 py-3 px-8 text-white rounded ">Sing Up</button>
                            </div>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="bg-green-500 text-center text-white py-6">
                          <span className="text-2xl">Basic</span>
                        </div>
                        <div className="bg-white shadow">
                          <ul className="text-center">
                            <li className="border-b-2 border-gray-100 py-3">Web Design</li>
                            <li className="border-b-2 border-gray-100 py-3">Photography</li>
                            <li className="border-b-2 border-gray-100 py-3">Mail Support</li>
                            <ul className="p-">
                            <li className=" py-3 text-3xl">$ 10</li>
                            <span className="text-xl">per month</span>
                            <div className="py-6">
                            <button className="bg-indigo-600 py-3 px-8 text-white rounded ">Sing Up</button>
                            </div>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </div>

                    
                    {/* contact me */}

                    <div className="bg-stone-100 p-4 mt-6">
                      <h2 className="text-2xl font-bold">Contact Me</h2>
                      <div className="grid grid-cols-3 py-5">
                        <div className="text-center bg-slate-600 text-white">
                        <MdEmail className="mx-auto text-4xl py-1" />
                        <span>Email.@com</span>
                        </div>
                        <div className="text-center bg-indigo-600 text-white">
                        <FaLocationDot className="mx-auto text-4xl py-1 " />
                        <span>My Location</span>
                        </div>
                        <div className="text-center bg-orange-800 text-white">
                        <MdOutlineLocalPhone  className="mx-auto text-4xl py-1 " />
                        <span>01780544535</span>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </div>
    </div>
  )
}
