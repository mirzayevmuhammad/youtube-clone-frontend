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
            path: "/liblary",
            element: <Shortspage />,
          },
          {
            path: "/history",
            element: <Shortspage />,
          },
          {
            path: "/trending",
            element: <Shortspage />,
          },
          {
            path: "/shopping",
            element: <Shortspage />,
          },
          {
            path: "/music",
            element: <Shortspage />,
          },
          {
            path: "/movie",
            element: <Shortspage />,
          },
          {
            path: "/live",
            element: <Shortspage />,
          },
          {
            path: "/gaming",
            element: <Shortspage />,
          },
          {
            path: "/news",
            element: <Shortspage />,
          },
          {
            path: "/sports",
            element: <Shortspage />,
          },
          {
            path: "/learning",
            element: <Shortspage />,
          },
          {
            path: "/fashion",
            element: <Shortspage />,
          },
          {
            path: "/podcasts",
            element: <Shortspage />,
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
