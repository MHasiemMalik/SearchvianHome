import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
        <div className="flex gap-4">
        <a href="https://mail.google.com" className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
            Gmail
        </a>
        <a href="https://www.google.com/images" className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
            Images
        </a>
        </div>

         <ProfileIcon />
       </header>

    );
};

export default HomeHeader;
