import React, { useRef } from 'react';
import { EgyptBuild } from "./EgyptBuild";
import { DragonBuild } from "./DragonBuild";
import { IrelandBuild } from "./IrelandBuild";
import { PoseidonBuild } from "./PoseidonBuild";
import { HalloweenBuild } from "./HalloweenBuild";

interface ContentProps {
  identifier: number;
}

export const UnityHandler: React.FC<ContentProps> = ({ identifier }) => {
  const egyptBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const dragonBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const irelandBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const PoseidonBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const HalloweenBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const myDataRef = useRef<number | null>(null);
  const firstTimeRef = useRef<Boolean | null>(false);


    if (myDataRef.current !== null && firstTimeRef.current) {
        if (egyptBuildRef.current) {
            if(myDataRef.current === 1){

                egyptBuildRef.current.unloadBuild();
            }

        }
        if (dragonBuildRef.current && firstTimeRef.current) {
            if (dragonBuildRef.current) {
                if(myDataRef.current === 2){
                    dragonBuildRef.current.unloadBuild();
                }
            }
        }
        if (irelandBuildRef.current && firstTimeRef.current) {
          if (irelandBuildRef.current) {
              if(myDataRef.current === 3){
                irelandBuildRef.current.unloadBuild();
              }
          }
        }

        if (PoseidonBuildRef.current && firstTimeRef.current) {
          if (PoseidonBuildRef.current) {
              if(myDataRef.current === 4){
                PoseidonBuildRef.current.unloadBuild();
              }
          }
        }

        if (HalloweenBuildRef.current && firstTimeRef.current) {
          if (HalloweenBuildRef.current) {
              if(myDataRef.current === 5){
                HalloweenBuildRef.current.unloadBuild();
              }
          }
        }
    }


  if (identifier === 1) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <EgyptBuild ref={egyptBuildRef} />;
  }

  if (identifier === 2) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <DragonBuild ref={dragonBuildRef} />;
  }

  if (identifier === 3) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <IrelandBuild ref={irelandBuildRef} />;
  }

  if (identifier === 4) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <PoseidonBuild ref={PoseidonBuildRef} />;
  }

  if (identifier === 5) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <HalloweenBuild ref={HalloweenBuildRef} />;
  }

  return <div></div>;
};
