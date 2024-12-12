import { Unity, useUnityContext } from "react-unity-webgl";
import { LoadingPage } from '../pages/LoadingPage';
import React, { useCallback, useEffect, useState } from "react";


export const UnityScene = () => {
    const {
        unityProvider,
        isLoaded,
        addEventListener,
        removeEventListener, sendMessage
      } = useUnityContext({
        loaderUrl: "/unitybuild/unityBuild.loader.js",
        dataUrl: "/unitybuild/unityBuild.data",
        frameworkUrl: "/unitybuild/unityBuild.framework.js",
        codeUrl: "/unitybuild/unityBuild.wasm",
      });
      const [isLoadedInternal, setIsGameLoadedInternal] = useState(false);

      const handleLoaded = useCallback(() => {
        setIsGameLoadedInternal(true);
      }, []);

      useEffect(() => {
        if(window.innerWidth <= 768){
          console.log("Mobil")
          
      }else{
          sendMessage("ReactController", "AdjustSize", 100);
          console.log("Desktop")
      }
      }, [isLoaded]);




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
                {!isLoadedInternal ? <LoadingPage/> : null }
            <Unity
                unityProvider={unityProvider}
                style={{ width: "99%", height: "99%" }}
            />
            
            </div>
        </div>
    )
}