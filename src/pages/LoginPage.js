
import '../styles/LoginPage.css';
import React, { useContext } from "react";
import { ElementContextRoute } from "../context/RouteContext";
export const LoginPage = () => {
    const {changeRoute} = useContext(ElementContextRoute);
    const onClickChangeRoute= () =>{
        changeRoute("Main")
    }

    return (
        <div className = "backgorund" style={{backgroundColor: "white", width: "100vw", height: "100vh", display: "flex", justifyContent: "center"}}>
            <div>
                <h1 style={{color: "#5C1F99", fontSize: "53px", marginTop: "20vh", marginBottom: "0", textAlign: "center"}}>cashimiro AI</h1>
                <h2 style={{marginTop: "0", color: "#5C1F99", textAlign: "center", fontSize: "21px"}}>Bienvenidos a <span style={{color: "#06E5E6"}}>cashimiro</span>, 
                    <span style={{display: "block",}}>text text.</span>
                </h2>
                <div className='inputHolder' style={{display: "grid", justifyContent: "center"}}>
                    <div className= "inputName">
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "1.5vh"}}>Nombre</h3>
                        <input placeholder="Nombre" type="text" className= "input"/>
                    </div>
                    <div className="inputEmail">
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "0", marginTop: "1.5vh"}}>Email</h3>
                        <input placeholder='Email' type='email' className= "input"/>
                    </div>
                    <div className='inputAge'>
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "1.5vh"}}>Edad</h3>
                        <input className= "input" placeholder='Edad' type="number" />
                    </div>
                    <button onClick={onClickChangeRoute} style ={{marginTop: "3vh", backgroundColor: "#5C1F99", color: "white", borderRadius: "25px", height: "5vh"}}>Continuar</button>
                </div>
                
            </div>
            <h4 style={{fontSize: "12px", textAlign: "center", position: "fixed", bottom: "0"}}>Términos de servicio | Política de privacidad</h4>
        </div>

    )
}