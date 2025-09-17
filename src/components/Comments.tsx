import Icon from "./ui/Icons";

interface CommentsProps {
  user: string;
}

const Comments = ({}: CommentsProps) => {
  return (
    <>
      <div>
        <div className="py-4 flex">
          <div className=" w-[44px] h-[44px] mr-[17px] rounded-full bg-[#0000001A] pl-11"></div>
          <input
            type="text"
            id="comentinput"
            className="border-b-2 w-[100%] border-[#0000002a]"
            placeholder="Add a Comment"
          />
        </div>
        <div className="flex pt-[19px] max-w-[1251px]">
          <div className="w-[44px] h-[44px] mr-[17px] rounded-full bg-[#0000001A] pl-11"></div>
          <div className="flex flex-col ">
            <div className="flex gap-x-3 mb-3">
              <span id="name" className="font-black">
                @Tommy
              </span>
              <span className="opacity-90">1 second ago</span>
            </div>
            <span id="comment" className=" mb-3 w-[100%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, perferendis voluptatum iure quibusdam aperiam nemo.
              Dolorum veritatis quia est, qui eaque nobis quisquam eligendi
              assumenda maxime dolore vel reprehenderit culpa omnis molestiae
              quasi amet totam nesciunt accusantium! Distinctio facilis,
              voluptatum possimus deserunt, quaerat reiciendis eum dolorum,
              laborum mollitia enim ullam!
            </span>
            <div className="flex gap-x-7 ">
              <div className="flex gap-x-3  items-center">
                <Icon.likeIcon />
                <span id="likecount">0</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <Icon.dzlikeIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
