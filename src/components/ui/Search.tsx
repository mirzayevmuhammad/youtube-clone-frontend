import Icons from "./Icons";

interface SearchProps {
  inputcl: string;
}

const Search = ({ inputcl }: SearchProps) => {
  return (
    <>
      <div className="flex items-center max-h-[50px]">
        <input
          type="textsear"
          placeholder="search"
          className={`${inputcl} py-[9px] px-[17px] text-[16px]  rounded-[30px_0%_0%_30px] border-2 border-[#CCCCCC] placeholder:text-[#888888] text-[#000] outline-0 focus:border-sky-600`}
        />
        <button className="border-2 border-[#CCCCCC] bg-[#F8F8F8] py-[12px] px-[21px] rounded-[0px_30px_30px_0px] cursor-pointer hover:bg-[#e6e6e6e3]">
          <Icons.searchIcon />
        </button>
      </div>
    </>
  );
};

export default Search;
