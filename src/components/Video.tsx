interface Videoparts {
  url: string;
  img: string;
  description: string;
  name: string;
  view: string;
  hour: string;
}

const Video = ({}: Videoparts) => {
  return (
    <>
      <>
        <div className="flex flex-col max-w-[435px]  ">
          <div className="w-full bg-[#0000001A] rounded-[13px] h-[245px]"></div>
          <div className="flex pt-[19px]">
            <div className="w-[44px] h-[44px] mr-[17px] rounded-full bg-[#0000001A]"></div>
            <div className="flex flex-col ">
              <span className="max-w-[315px] mb-1.5 text-[17px] font-bold">
                Stremerlar bilan mafia oynemiz hamma kirsin
              </span>
              <span>Suyunbe Stream</span>
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

export default Video;
