
import Sidebar from "../section/sidebar/Sidebar";
import Header from "../section/header/Header";
import Gallery from "../section/gallery/Gallery"
import About from "../section/about/About";
import Contact from "../section/contact/Contact";
import Footer from "../section/footer/Footer";
import Charge from "../section/charge/Charge";

export default function Layout() {
    return (
        <div>
            <div>
                <div className="grid grid-cols-12 gap-8 ">
                    <Sidebar />
                    <div className="container mx-auto bg-white shadow p-5 col-span-9 ">
                        <Header />
                        <Gallery />
                        <About />
                        <Charge />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
