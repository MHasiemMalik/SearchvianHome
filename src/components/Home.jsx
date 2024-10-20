import Logo from "../assets/svtest2.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="h-screen flex flex-col">
            <HomeHeader />
            <main className="flex-grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44 pb-custom">
                    <img
                        className="w-[272px] md:w-[372px] mb-8"
                        src={Logo}
                        alt="Logo"
                    />
                    <SearchInput />
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                          Developed By 
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                          Mohammed Hasiem Malik  
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
