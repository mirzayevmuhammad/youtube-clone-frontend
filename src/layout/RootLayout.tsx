import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../index.css";
import Videoparts from "../components/Videoparts";
import { useState } from "react";

const RootLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <Header open={open} setOpen={setOpen} />
        <Sidebar open={open} />
      </div>
      <div className="pt-[62px] pl-[250px]">
        {pathname === "/" && <Videoparts />}
        <div className={`${pathname === "/" ? "mt-[64px]" : "mt-1"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
