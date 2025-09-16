interface Videoparts {
  url: string;
  img: string;
  description: string;
  name: string;
  view: string;
  hour: string;
}

const SmallVideo = ({}: Videoparts) => {
  return (
    <>
      <>
        <div className="flex  min-w-[600px] gap-x-2 ">
          <div className="w-[75%] bg-[#0000001A] rounded-[13px] h-[175px]"></div>
          <div className="flex pt-[19px]">
            <div className="flex flex-col gap-y-2">
              <span id="tittle" className=" mb-1.5 text-[17px] font-bold">
                Stremerlar bilan mafia oynemiz hamma kirsin
              </span>
              <span id="name">Suyunbe Stream</span>
              <h1>
                <span>126K views</span> • <span>3 months ago</span>
              </h1>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SmallVideo;
