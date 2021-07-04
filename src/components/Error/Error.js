import React from "react"
import { AiOutlineDisconnect } from "react-icons/ai"


// css
import './Error.css'


const Error = () => {
    const refreshPage = ()=>{
        window.location.reload();
     }
  return (
    <div className="error">
      
        <AiOutlineDisconnect size={120} />
      
      <h4>Error de conexion</h4>
      <h5>Controla tu conexion a internet</h5>
      <a href="" onClick={refreshPage}>Probar de nuevo</a>
    </div>
  );
};

export default Error;
