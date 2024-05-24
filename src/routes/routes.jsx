import {createBrowserRouter} from "react-router-dom";
import App from '../pages/App.jsx';
import Playgame from "../pages/Playgame.jsx";
export const router = createBrowserRouter([
    {
      path: '/',
      element:<><App/></>
    },
    {
        path:'/playgame',
        element:<><Playgame/></>
    }
  ])