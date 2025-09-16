import { useEffect, useState } from "react";
import api from "../api/axios";
import Video from "../components/Video";

interface VideoType {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  thumbnail?: string;
  videoUrl?: string;
  viewsCount?: number;
}

const Homepage = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);

  async function fetchData() {
    try {
      console.log("am");

      let res = await api.get("/videos/all");
      console.log(res, "am2");
      if (res.data && res.data.success) {
        setVideos(res.data.data as VideoType[]);
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="pl-[15px] flex gap-x-5 flex-wrap">
        {videos.map((video) => (
          <a key={video.id} href={`/watch/${video.id}`}>
            <Video
              description={video.description || ""}
              hour={video.duration || ""}
              img={video.thumbnail || ""}
              name={video.title || ""}
              url={video.videoUrl || ""}
              view={(video.viewsCount || 0).toString()}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Homepage;
