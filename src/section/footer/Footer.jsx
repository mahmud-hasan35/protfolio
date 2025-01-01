

export default function Footer() {
    return (
        <>
            <div className="bg-slate-600 p-6">
                <div className="grid grid-cols-3 gap-3">
                    <div className="text-white">
                        <h4 className="text-3xl text-slate-50 mb-3">Footer</h4>
                        <p className="text-slate-100">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            Powered</p>
                    </div>
                    <div className="text-white">
                        <h4 className="text-3xl text-slate-50">Blog</h4>
                        <div className="flex border-b-2 border-slate-500 py-4">
                            <img className="w-12 h-12 ml-2" src="../public/Mask Group4.png" alt="image" />
                            <h3 className="ml-3">Lorem <br className="mt-1" />Sed mattis nunc</h3>
                        </div>
                        <div className="flex border-b-2 border-slate-500 py-4">
                            <img className="w-12 h-12 ml-2" src="../public/Mask Group4.png" alt="image" />
                            <h3 className="ml-3">Lorem <br className="mt-1" />Sed mattis nunc</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl text-slate-50">POPULAR TAGS </h2>
                        <div>
                            <ul>
                                <li className="flex gap-2 py-4">
                                    <button className="bg-slate-500 text-white px-3 text-sm">Travel</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">New York</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">London</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">IKEA</button>
                                </li>
                                <li className="flex gap-3 py-3">
                                    <button className="bg-slate-500 text-white px-3 text-sm">Ideas</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">Shoping</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">News</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">Clothing</button>
                                </li>
                                <li className="flex gap-2 py-3">
                                    <button className="bg-slate-500 text-white px-3 text-sm">Sports</button>
                                    <button className="bg-slate-500 text-white px-3 text-sm">Family</button>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
