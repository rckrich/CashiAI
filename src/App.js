
import './styles/App.css';
import React, { useContext } from "react";

import { ElementContextRoute } from "./context/RouteContext";
import { LoadingPage } from './pages/LoadingPage';
import { MainPage } from './pages/MainPage';
function App() {
  const {route} = useContext(ElementContextRoute);

  let currentPage ;
  console.log(1.2);
  switch (route) {
    case "":
      currentPage = (<LoadingPage></LoadingPage>)
      break;
    case "Main":
      currentPage = (<MainPage></MainPage>)
      break;
    default:
      currentPage = (<LoadingPage></LoadingPage>)
      break;
  }

  return (
    <div className="App">
      <>{currentPage}</>
    </div>
  );
}

export default App;
