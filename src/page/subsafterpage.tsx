import Icon from "../components/ui/Icons";
import Signinbutton from "../components/ui/Signinbutton";

const Subsafterpage = () => {
  return (
    <>
      <div className="flex gap-y-[20px] flex-col pt-[195px] items-center">
        <Icon.subvidioIcon />
        <span className="text-[19px] font-light">
          You can use this page after registering.
        </span>
        <Signinbutton />
      </div>
    </>
  );
};

export default Subsafterpage;
