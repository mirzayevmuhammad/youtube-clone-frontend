// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import Video from "../components/Video";

// interface VideoType {
//   id: string;
//   title: string;
//   description?: string;
//   duration?: string;
//   thumbnail?: string;
//   videoUrl?: string;
//   viewsCount?: number;
// }

// const Homepage = () => {
//   const [videos, setVideos] = useState<VideoType[]>([]);

//   async function fetchData() {
//     try {
//       console.log("am");

//       let res = await api.get("/video/feed/videos", {
//         params: {
//           limit: 10,
//           page: 1,
//           categoryId: "", // agar categoryId kerak bo‘lmasa yubormasa ham bo‘ladi
//         },
//       });

//       console.log(res, "am2");
//       if (res.data && res.data.success) {
//         setVideos(res.data.data as VideoType[]);
//       }
//     } catch (error) {
//       console.error("Xatolik:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="pl-[15px] flex gap-x-5 flex-wrap">
//         <Video description="" url="" hour="" img="" name="" view="" />
//         {videos.map((video) => (
//           <a key={video.id} href={`/watch/${video.id}`}>
//             <Video
//               description={video.description || ""}
//               hour={video.duration || ""}
//               img={video.thumbnail || ""}
//               name={video.title || ""}
//               url={video.videoUrl || ""}
//               view={(video.viewsCount || 0).toString()}
//             />
//           </a>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Homepage;

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
      let res = await api.get("/video/feed/videos", {
        params: { page: 1, limit: 12 },
      });

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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <a key={video.id} href={`/watch/${video.id}`}>
          <Video
            description={video.description || ""}
            hour={video.duration || ""}
            img={`http://localhost:4000/${video.thumbnail}`}
            name={video.title || ""}
            url={`http://localhost:4000/${video.videoUrl}`}
            view={(video.viewsCount || 0).toString()}
          />
        </a>
      ))}
    </div>
  );
};

export default Homepage;
