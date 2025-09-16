import SmallVideo from "../components/SmallVideo";
import Icon from "../components/ui/Icons";

const Watchpage = () => {
  return (
    <>
      <div className="p-6 flex">
        <div className="mr-5">
          <div
            id="video"
            className="w-[1199px] h-[593px] mb-[13px] bg-[#0000000d]"
          ></div>
          <span className="text-[19px] font-black" id="tittle">
            Strimerlar bilan mafia oynemiz hamma kirsin!
          </span>
          <div className="flex mt-[9px]">
            <div className="w-[44px] h-[44px] mr-[17px] rounded-full bg-[#0000001A]"></div>
            <div className="flex flex-col pr-[19px]">
              <span className="text-[17px] font-black" id="name">
                Suyunbe Stream
              </span>
              <span>126K views</span>
            </div>
            <div className="mt-[19px] w-[53%] flex justify-between">
              <div className=" flex gap-x-[10px]">
                <button className="font-black px-[19px] bg-[#0000001a] rounded-full py-[7px]">
                  Join
                </button>
                <button className="font-black px-[19px]  rounded-full py-[7px] bg-black text-white">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-x-[13px]">
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
        </div>
    <div className="flex flex-col gap-y-3">

        <SmallVideo description="" hour="" img="" name="" url="" view="" />
        <SmallVideo description="" hour="" img="" name="" url="" view="" />
    </div>

      </div>
    </>
  );
};

export default Watchpage;
