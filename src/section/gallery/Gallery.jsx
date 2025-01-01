import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";


export default function Gallery() {
  return (
    <>
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
    </>
  )
}
