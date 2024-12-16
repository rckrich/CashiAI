
import './styles/App.css';
import React, { useContext } from "react";

import { ElementContextRoute } from "./context/RouteContext";
import { LoadingPage } from './pages/LoadingPage';
import { MainPage } from './pages/MainPage';
import {LoginPage} from './pages/LoginPage'
function App() {
  const {route} = useContext(ElementContextRoute);
  console.log("1.6")
  let currentPage ;
  switch (route) {
    case "":
      currentPage = (<LoadingPage></LoadingPage>)
      break;
    case "Main":
      currentPage = (null)
      break;
    case "Login":
      currentPage = (<LoginPage></LoginPage>)
      break;
    default:
      currentPage = (<LoadingPage></LoadingPage>)
      break;
  }

  return (
    <div className="App">
      <>{currentPage}</>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
