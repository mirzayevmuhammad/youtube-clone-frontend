import { useState } from "react";
import PartButton from "./ui/PartButton";
import "../assets/style/btn.css";
const array = [
  {
    id: 1,
    title: "All",
    value: "all",
  },
  {
    id: 2,
    title: "Music",
    value: "music",
  },
  {
    id: 3,
    title: "News",
    value: "news",
  },
  {
    id: 4,
    title: "Chill-out music",
    value: "chill-out music",
  },
  {
    id: 5,
    title: "Gaming",
    value: "gaming",
  },
  {
    id: 6,
    title: "Live",
    value: "live",
  },
  {
    id: 7,
    title: "Meditation music",
    value: "meditation music",
  },
  {
    id: 8,
    title: "Inventions",
    value: "inventions",
  },
  {
    id: 9,
    title: "Game shows",
    value: "game shows",
  },
  {
    id: 10,
    title: "Comedy",
    value: "comedy",
  },
  {
    id: 11,
    title: "Trucks",
    value: "trucks",
  },
  {
    id: 12,
    title: "Deep House",
    value: "deep House",
  },
];

const Videoparts = () => {
  const [currenttag, setCurrenttag] = useState(array[0].value);

  return (
    <>
      <div className=" fixed top-15 px-[24px] py-[12px] w-[88%] flex   gap-x-3 left-[240px] z-40">
        {array.map((button) => {
          return (
            <PartButton
              onClick={() => setCurrenttag(button.value)}
              key={button.id}
              tittle={button.title}
              classname={`${button.value === currenttag ? "active" : ""}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Videoparts;
