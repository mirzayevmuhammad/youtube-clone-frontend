import Icons from "./Icons";

const Signinbutton = () => {
  return (
    <>
      <div>
        <button className="flex items-center border border-[#0000001A] rounded-full py-2 pl-3 pr-4 gap-x-2 hover:bg-[#065fd438] font-black text-[14px] text-[#065FD4]">
          <Icons.avaIcon />
          Sign in
        </button>
      </div>
    </>
  );
};

export default Signinbutton;
