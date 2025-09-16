import { NavLink } from "react-router-dom";
import Icon from "./ui/Icons";
import Signinbutton from "./ui/Signinbutton";

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const mainMenus = [
    { title: "Home", icon: <Icon.homeIcon />, path: "/" },
    { title: "Shorts", icon: <Icon.shortsIcon />, path: "/shorts" },
    { title: "Subscriptions", icon: <Icon.subsIcon />, path: "/subscriptions" },
  ];

  const exploreMenus = [
    { title: "Trending", icon: <Icon.trendIcon />, path: "/trending" },
    { title: "Shopping", icon: <Icon.shopIcon />, path: "/shopping" },
    { title: "Music", icon: <Icon.musicIcon />, path: "/music" },
    { title: "Movies & TV", icon: <Icon.movieIcon />, path: "/movie" },
    { title: "Live", icon: <Icon.liveIcon />, path: "/live" },
    { title: "Gaming", icon: <Icon.gamingIcon />, path: "/gaming" },
    { title: "News", icon: <Icon.newIcon />, path: "/news" },
    { title: "Sports", icon: <Icon.sportIcon />, path: "/sports" },
    { title: "Learning", icon: <Icon.learnIcon />, path: "/learning" },
    { title: "Fashion", icon: <Icon.fashionIcon />, path: "/fashion" },
    { title: "Podcasts", icon: <Icon.podcastIcon />, path: "/podcasts" },
  ];

  return (
    <aside
      className={`fixed top-[56px]  left-0 h-screen bg-white transition-all duration-300 ${
        open ? "w-[240px]" : "w-[72px]"
      }`}
    >
      {!open ? (
        <ul className="flex flex-col items-center gap-6 py-4">
          {mainMenus.map((menu, i) => (
            <NavLink
              to={menu.path}
              key={i}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full py-3 hover:bg-[#0000000D] ${
                  isActive ? "bg-[#0000000D] text-[#000]" : "text-[#000]"
                }`
              }
            >
              {menu.icon}
              <span className="text-[10px] mt-1">{menu.title}</span>
            </NavLink>
          ))}
          <NavLink
            to="/you"
            className={({ isActive }) =>
              `flex flex-col items-center text-[11px] justify-center w-full py-3 hover:bg-[#0000000D] ${
                isActive ? "bg-[#0000000D] text-[#000]" : "text-[#000]"
              }`
            }
          >
            <Icon.avabIcon />
            You
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex flex-col items-center text-[11px]  justify-center w-full py-3 hover:bg-[#0000000D] ${
                isActive ? "bg-[#0000000D] text-[#000]" : "text-[#000]"
              }`
            }
          >
            <Icon.historyIcon />
            History
          </NavLink>
        </ul>
      ) : (
        <div className="overflow-y-auto h-full pb-10">
          <div className="border-b p-[12px] border-[#0000000D]">
            {mainMenus.map((menu, i) => (
              <NavLink
                to={menu.path}
                key={i}
                className={({ isActive }) =>
                  `p-[8px_10px]  rounded-[10px] pl-[17px] flex items-center gap-x-[15px] w-full text-[15px] font-semibold hover:bg-[#0000000D] ${
                    isActive
                      ? "bg-[#0000000D] text-[#000] [&>svg>path]:fill-[#000]"
                      : "text-[#000]"
                  }`
                }
              >
                {menu.icon}
                {menu.title}
              </NavLink>
            ))}
          </div>

          <div className="border-b p-[12px] border-[#0000000D]">
            <NavLink
              to="/you"
              className="p-[8px_10px] rounded-[10px] pl-[17px] flex items-center gap-x-[15px] w-full text-[15px] font-semibold hover:bg-[#0000000D]"
            >
              <Icon.avabIcon />
              You
            </NavLink>
            <NavLink
              to="/history"
              className="p-[8px_10px] rounded-[10px] pl-[17px] flex items-center gap-x-[15px] w-full text-[15px] font-semibold hover:bg-[#0000000D]"
            >
              <Icon.historyIcon />
              History
            </NavLink>
          </div>

          <div className="mb-[10px] border-b border-[#0000000D] px-[20px] py-[17px] gap-y-[12px] flex flex-col">
            <span className="text-[14px] text-[#0F0F0F]">
              Sign in to like videos, comment, and subscribe.
            </span>
            <Signinbutton />
          </div>

          <span className="pl-5 text-[17px]">Explore</span>
          <div className="p-[12px]">
            {exploreMenus.map((menu, i) => (
              <NavLink
                to={menu.path}
                key={i}
                className="p-[8px_10px] rounded-[10px] pl-[17px] flex items-center gap-x-[15px] w-full text-[15px] font-semibold hover:bg-[#0000000D]"
              >
                {menu.icon}
                {menu.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
