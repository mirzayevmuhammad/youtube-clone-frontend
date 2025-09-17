import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../index.css";
import Videoparts from "../components/Videoparts";
import { useState } from "react";
import Icon from "../components/ui/Icons";

const RootLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);

  const isWatch = pathname.startsWith("/watch");

  return (
    <>
      <div className="flex">
        <Header open={open} setOpen={setOpen} />
        {!isWatch && <Sidebar open={open} />}
      </div>

      <div className={`pt-[62px] ${!isWatch ? "pl-[250px]" : "pl-0"}`}>
        {pathname === "/" && <Videoparts />}
        <div className={`${pathname === "/" ? "mt-[64px]" : "mt-1"}`}>
          <Outlet />
        </div>
      </div>

      {isWatch && (
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        >
          <div
            className={`absolute top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-x-[25px] py-[21px] pl-[30px] pr-[23px]">
              <button onClick={() => setOpen(!open)}>
                <Icon.menuIcon />
              </button>
              <img src="logo1.svg" alt="" />
            </div>
            <Sidebar open={open} />
          </div>
        </div>
      )}
    </>
  );
};

export default RootLayout;
