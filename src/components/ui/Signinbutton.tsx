import { useGoogleLogin } from "@react-oauth/google";
import Icons from "./Icons";
const Signinbutton = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Token:", tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });
  return (
    <>
      <div>
        <button
          onClick={() => login()}
          className="flex items-center border border-[#0000001A] rounded-full py-2 pl-3 pr-4 gap-x-2 hover:bg-[#065fd438] font-black text-[14px] text-[#065FD4]"
        >
          <Icons.avaIcon />
          Sign in
        </button>
      </div>
    </>
  );
};

export default Signinbutton;
