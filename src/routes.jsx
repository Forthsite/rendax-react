import App from "./App";
import Articlepage from "./views/Articlepage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog/:url",
    element: <Articlepage />,
  },
  {
    path: '#onas',
    element: <App/>,
  }
];

export default routes;