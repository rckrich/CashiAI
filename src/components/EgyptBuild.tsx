import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "react-bootstrap/Button";
import { useImperativeHandle, forwardRef } from "react";

export const EgyptBuild = forwardRef((props, ref) => {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    unload,
    requestFullscreen,
  } = useUnityContext({
    loaderUrl: "/unitybuild/Egypt/Egypt.loader.js",
    dataUrl: "/unitybuild/Egypt/Egypt.data",
    frameworkUrl: "/unitybuild/Egypt/Egypt.framework.js",
    codeUrl: "/unitybuild/Egypt/Egypt.wasm",
  });

  const handleClickFullscreen = () => {
    if (!isLoaded) {
      return;
    }
    requestFullscreen(true);
  };

  useImperativeHandle(ref, () => ({
    unloadBuild: async () => {
      await unload();
    }
  }));

  return (
    <div className={"containerU"}>
      <div className="buttons" style={{ paddingTop: "20px", paddingBottom: "20px"}}>
        <Button href="#"
          onClick={handleClickFullscreen}
          variant="secondary"
          style={{ left: "100%" }}
        >
          Fullscreen
        </Button>
      </div>
      <div className={"unityWrapper"}>
        {!isLoaded && (
          <div className={"loadingBar"}>
            <div
              className={"loadingBarFill"}
              style={{ width: loadingProgression * 100 }}
            />
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
});
