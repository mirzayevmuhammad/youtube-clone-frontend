import Icon from "./Icons";

const Shorts = () => {
  
  return (
    <>
      <div className="flex  justify-center ">
        <div className="w-[484px] h-[860px] bg-[#0000001A] rounded-[13px] px-[17px]">
          <div className="w-full h-full"></div>
        </div>
        <div className=" w-12 h-[88vh] mt-[17px] mx-[12px] flex flex-col justify-between ">
          <div className="p-4 flex justify-center bg-[#0000000D]  rounded-full">
            <Icon.threedotyIcon />
          </div>
          <div className="flex flex-col gap-y-1 items-center">
            <div className="p-4 flex justify-center bg-[#0000000D]  rounded-full">
              <Icon.likeIcon />
            </div>
            <span>000</span>
            <div className="p-4 flex justify-center bg-[#0000000D]  rounded-full">
              <Icon.dzlikeIcon />
            </div>{" "}
            <span>000</span>
            <div className="p-3 flex justify-center bg-[#0000000D]  rounded-full">
              <Icon.messageIcon />
            </div>{" "}
            <span>000</span>
            <div className="p-4 flex justify-center bg-[#0000000D]  rounded-full">
              <Icon.shareIcon />
            </div>{" "}
            <span>000</span>
            <div className="p-4 flex justify-center bg-[#0000000D]  rounded-full">img</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shorts;
