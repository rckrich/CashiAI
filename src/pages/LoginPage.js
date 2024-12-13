
import '../styles/LoginPage.css';
import React, { useContext, useRef } from "react";
import { ElementContextRoute } from "../context/RouteContext";
export const LoginPage = () => {
    const {changeRoute, setId} = useContext(ElementContextRoute);
    const inputRefName = useRef(null);
    const inputRefEmail = useRef(null);
    const inputRefEdad = useRef(null);

    const onClickLogIn = async () => {
        if(inputRefName.current.value.trim() !== "" && inputRefEmail.current.value.trim() !== "" && inputRefEdad.current.value.trim() !== ""){
            const response = fetch( "http://165.232.151.217/api/v1/signin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: inputRefName.current.value,
                    email: inputRefEmail.current.value,
                    age: inputRefEdad.current.value
                })
            })
            .then(response => {
                if(!response.ok){
                    throw new Error("Error en el servidor");
                }
                return response.json();
            }).then(data =>{
                changeRoute("Main")
                setId(data.id);
                console.log(data);
            })
        }
    }


    if(window.innerWidth <= 768){
        console.log("Mobil")
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
                        <button onClick={onClickLogIn} style ={{marginTop: "3vh", backgroundColor: "#5C1F99", color: "white", borderRadius: "25px", height: "5vh"}}>Continuar</button>
                    </div>
                </div>
                <h4 style={{fontSize: "12px", textAlign: "center", position: "fixed", bottom: "0"}}>Términos de servicio | Política de privacidad</h4>
            </div>
        )

    }else{
        console.log("Desktop")
        return(
            <div className = "backgorund" style={{backgroundColor: "white", width: "100vw", height: "100vh", display: "flex", justifyContent: "center"}}>
            <div>
                <h1 style={{color: "#5C1F99", fontSize: "53px", marginTop: "12vh", marginBottom: "0", textAlign: "center"}}>cashimiro AI</h1>
                <h2 style={{marginTop: "0", color: "#5C1F99", textAlign: "center", fontSize: "21px"}}>Bienvenidos a <span style={{color: "#06E5E6"}}>cashimiro</span>, 
                    <span style={{display: "block",}}>text text.</span>
                </h2>
                <div className='inputHolder' style={{display: "grid", justifyContent: "center"}}>
                    <div className= "inputName">
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "1.5vh"}}>Nombre</h3>
                        <input placeholder="Nombre" type="text" className= "input_web" ref={inputRefName}/>
                    </div>
                    <div className="inputEmail">
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "0", marginTop: "1.5vh"}}>Email</h3>
                        <input placeholder='Email' type='email' className= "input_web"ref={inputRefEmail}/>
                    </div>
                    <div className='inputAge'>
                        <h3 style={{color: "#5C1F99", marginBottom: "0", marginTop: "1.5vh"}}>Edad</h3>
                        <input className= "input_web" placeholder='Edad' type="number" ref={inputRefEdad} />
                    </div>
                    <button onClick={onClickLogIn}  style ={{marginTop: "3vh", backgroundColor: "#5C1F99", color: "white", borderRadius: "25px", height: "6vh"}}>Continuar</button>
                </div>
            </div>
            <h4 style={{fontSize: "12px", textAlign: "center", position: "fixed", bottom: "0"}}>Términos de servicio | Política de privacidad</h4>
        </div>
        )
    }

    
}