import { Unity, useUnityContext } from "react-unity-webgl";
import { LoadingPage } from '../pages/LoadingPage';
import React, { useCallback, useEffect, useState, useContext } from "react";

import { ElementContextRoute } from "../context/RouteContext";
export const UnityScene = () => {
  const {id} = useContext(ElementContextRoute);
  const [isSetWebCall, setIsSetWebCall] = useState(false);
    const {
        unityProvider,
        isLoaded,
        addEventListener,
        removeEventListener, sendMessage
      } = useUnityContext({
        loaderUrl: "/unitybuild/Build/unityBuild.loader.js",
        dataUrl: "/unitybuild/Build/unityBuild.data",
        frameworkUrl: "/unitybuild/Build/unityBuild.framework.js",
        codeUrl: "/unitybuild/Build/unityBuild.wasm",
      });
      const [isLoadedInternal, setIsGameLoadedInternal] = useState(false);

      const handleLoaded = useCallback(() => {
        setIsGameLoadedInternal(true);
      }, []);

      useEffect(() => {
        if(window.innerWidth <= 768){
          if(id != null && isSetWebCall === false){
            sendMessage("ReactController", "reactWebCall", id.toString());
            setIsSetWebCall(true);
          }
          console.log("Mobil")
          
      }else{
        if(id != null && isSetWebCall === false){
          sendMessage("ReactController", "reactWebCall", id.toString());
          setIsSetWebCall(true);
        }
          sendMessage("ReactController", "AdjustSize", 100);
          console.log("Desktop")
      }
      }, [isLoaded]);

      useEffect(() => {
        
        if(id != null && isSetWebCall === false){
          sendMessage("ReactController", "reactWebCall", id.toString());
          setIsSetWebCall(true);
        }
      }, [id]);


      useEffect(() => {
        addEventListener("isLoadedF", handleLoaded);
        return () => {
          removeEventListener("isLoadedF", handleLoaded);
        };
      }, [addEventListener, removeEventListener, handleLoaded]);


    return (
        <div className={"containerU"}>
            <div className={"unityWrapper"}>
                {!isLoadedInternal ? <LoadingPage/> : null }
            <Unity
                tabIndex={1}
                unityProvider={unityProvider}
                style={{ width: "99%", height: "99%" }}
            />
            
            </div>
        </div>
    )
}