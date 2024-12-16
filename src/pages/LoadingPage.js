import '../styles/LoadingStyle.css';
import React, {  useEffect } from 'react';
export const LoadingPage = () => {


    useEffect(() => {

        //do something
        
      }, [])

    return (
        <div className='LoadingContainer'>
            <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            </div>
        </div>
    )
}