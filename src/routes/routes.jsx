import Home from "../Pages/Home";
import Typography from "../Pages/Typography";
import Buttons from "../Pages/Buttons";
import Inputs from "../Pages/Inputs";
const routs = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/colors",
    main: () => <h1>Coming Sooon</h1>,
  },
  {
    path: "/typography",
    main: () => <Typography />,
  },
  {
    path: "/buttons",
    main: () => <Buttons />,
  },
  {
    path: "/inputs",
    main: () => <Inputs />,
  },
  {
    path: "/spaces",
    main: () => <h1>Coming Soon</h1>,
  },
  {
    path: "/grid",
    main: () => <h1>Coming Soon</h1>,
  },
  {
    main: () => <h1>Ooops page dosn't exist 404</h1>,
  },
];

export default routs;
