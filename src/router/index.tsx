import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layout/AppWrapperLayout";
import RootLayout from "../layout/RootLayout";
import Homepage from "../page/homepage";
import Shortspage from "../page/shortspage";
import Subsafterpage from "../page/subsafterpage";
import Watchpage from "../page/watchpage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <Homepage /> },
          {
            path: "/shorts",
            element: <Shortspage />,
          },
          {
            path: "/subscriptions",
            element: <Subsafterpage />,
          },
          {
            path: "/you",
            element: <Subsafterpage />,
          },
          {
            path: "/history",
            element: <Subsafterpage />,
          },
          {
            path: "/trending",
            element: <Subsafterpage />,
          },
          {
            path: "/shopping",
            element: <Subsafterpage />,
          },
          {
            path: "/music",
            element: <Subsafterpage />,
          },
          {
            path: "/movie",
            element: <Subsafterpage />,
          },
          {
            path: "/live",
            element: <Subsafterpage />,
          },
          {
            path: "/gaming",
            element: <Subsafterpage />,
          },
          {
            path: "/news",
            element: <Subsafterpage />,
          },
          {
            path: "/sports",
            element: <Subsafterpage />,
          },
          {
            path: "/learning",
            element: <Subsafterpage />,
          },
          {
            path: "/fashion",
            element: <Subsafterpage />,
          },
          {
            path: "/podcasts",
            element: <Subsafterpage />,
          },
          {
            path: "/watch",
            element: <Watchpage />,
          },
        ],
      },
    ],
  },
]);
