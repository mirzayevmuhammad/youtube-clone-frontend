import type { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  tittle: string;
  classname: string;
}

const PartButton = ({ tittle, classname, onClick }: ButtonProps) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className={`rounded-[8px] cursor-pointer bg-[#0000000D] py-[6px] px-[13px] ${classname}`}
        >
          {tittle}
        </button>
      </div>
    </>
  );
};
export default PartButton;
