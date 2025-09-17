import { useEffect, useState } from "react";
import Icon from "./ui/Icons";
import Search from "./ui/Search";
import Signinbutton from "./ui/Signinbutton";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full flex justify-between px-[16px] transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/70 " : ""
        }`}
      >
        <div className="flex items-center gap-x-[25px] py-[21px] pl-[11px] pr-[23px]">
          <button onClick={() => setOpen(!open)}>
            <Icon.menuIcon />
          </button>
          <img src="logo1.svg" alt="" />
        </div>
        <div className="flex py-[8px] gap-x-4">
          <Search inputcl=" w-[540px]" />
          <button className="px-4 hover:bg-[#e7e7e7] cursor-pointer border border-[#e2e2e2] rounded-full bg-[#F8F8F8]">
            <Icon.microIcon />
          </button>
        </div>
        <div className="flex py-[10px] gap-x-4">
          <button className="px-2  cursor-pointer  ">
            <Icon.threedotyIcon />
          </button>
          <Signinbutton />
        </div>
      </header>
    </>
  );
};

export default Header;
