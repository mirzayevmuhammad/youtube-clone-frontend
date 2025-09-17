import Comments from "../components/Comments";
import SmallVideo from "../components/SmallVideo";
import Icon from "../components/ui/Icons";

const Watchpage = () => {
  return (
    <>
      <div className="p-6 flex">
        <div className="mr-5">
          <div
            id="video"
            className="w-[1251px] h-[593px] mb-[13px] bg-[#0000000d]"
          ></div>
          <span className="text-[19px] font-black" id="tittle">
            Strimerlar bilan mafia oynemiz hamma kirsin!
          </span>
          <div className="flex mt-[9px] w-[100%]">
            <div className="w-[44px] h-[44px] mr-[17px] rounded-full bg-[#0000001A]"></div>
            <div className="flex flex-col pr-[19px]">
              <span className="text-[17px] font-black" id="name">
                Suyunbe Stream
              </span>
              <span>00 Subscribe</span>
            </div>
            <div className="mt-[19px] w-[53%] flex gap-x-[430px]">
              <div className=" flex gap-x-[10px]">
                <button className="font-black px-[19px] bg-[#0000001a] rounded-full py-[7px]">
                  Join
                </button>
                <button className="font-black px-[19px]  rounded-full py-[7px] bg-black text-white">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-x-[13px] ">
                <div className="bg-[#0000000d] flex gap-x-[10px] rounded-full items-center px-2">
                  <button className="flex p-2 gap-x-1 items-center">
                    <Icon.likeIcon />
                    <span>0</span>
                  </button>
                  <span className="text-[#00000036]">|</span>
                  <button className="flex p-2 gap-x-1 items-center">
                    <Icon.dzlikeIcon />
                    <span>0</span>
                  </button>
                </div>
                <button className="flex p-2 rounded-full px-5  gap-x-2  items-center bg-[#0000000d] font-black">
                  <Icon.shareIcon />
                  Share
                </button>
                <button className="flex p-2 rounded-full px-5  gap-x-2  items-center bg-[#0000000d] font-black">
                  save
                </button>{" "}
                <button className="flex  rounded-full px-3  gap-x-2  items-center bg-[#0000000d] font-black">
                  <Icon.threedotxIcon />
                </button>
              </div>
            </div>
          </div>
          <div
            id="description"
            className="flex flex-col max-w-[100%]  gap-y-7 mt-7 p-4 bg-[#0000000d] rounded-[13px]"
          >
            <div className=" flex flex-col gap-y-1">
              <h1 className="flex gap-x-1 font-black">
                <span>00 views </span>
                <span>0 hour age</span>
              </h1>
              <span className="font-black ">description</span>
            </div>
            <span>https://t.me/qandaydur kanalga tegishli link</span>
          </div>
          <div id="comments" className="mt-5">
            <h1 className="text-[17px]">00 comments</h1>
            <Comments user="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <SmallVideo description="" hour="" img="" name="" url="" view="" />
        </div>
      </div>
    </>
  );
};

export default Watchpage;
