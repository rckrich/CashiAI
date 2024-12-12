import { Unity, useUnityContext } from "react-unity-webgl";
import { LoadingPage } from '../pages/LoadingPage';
import React, { useCallback, useEffect, useState } from "react";


export const UnityScene = () => {
    const {
        unityProvider,
        addEventListener,
        removeEventListener, sendMessage
      } = useUnityContext({
        loaderUrl: "/unitybuild/unityBuild.loader.js",
        dataUrl: "/unitybuild/unityBuild.data",
        frameworkUrl: "/unitybuild/unityBuild.framework.js",
        codeUrl: "/unitybuild/unityBuild.wasm",
      });
      const [isLoaded, setIsGameLoaded] = useState(false);

      const handleLoaded = useCallback(() => {
        setIsGameLoaded(true);
        if(window.innerWidth <= 768){
            console.log("Mobil")
            
        }else{
            sendMessage("ReactController", "AdjustSize", 100);
            console.log("Desktop")
        }
      }, []);



      useEffect(() => {
        addEventListener("isLoadedF", handleLoaded);
        return () => {
          removeEventListener("isLoadedF", handleLoaded);
        };
      }, [addEventListener, removeEventListener, handleLoaded]);



      console.log(isLoaded)
    return (
        <div className={"containerU"}>
            <div className={"unityWrapper"}>
                {!isLoaded ? <LoadingPage/> : null }
            <Unity
                unityProvider={unityProvider}
                style={{ width: "99%", height: "99%" }}
            />
            
            </div>
        </div>
    )
}