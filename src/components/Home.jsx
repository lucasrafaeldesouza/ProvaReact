import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const multiMes = () => {
    setContador(contador * contador);
  };

  const zerarMes = () => {
    setContador(0);
  };

  useEffect(() => {
    if (contador > 12) {
      setContadorAux(true);
      setMensagem("O ano possui apenas 12 meses");
    } else {
      setContadorAux(false);
    }
  }, [contador]);

  useEffect(() => {}, [contadorAux]);

  return (
    <div>
      <div>
        <h1>Seja bem vindo</h1>
        <h3>Forge Soluções Digitais</h3>
      </div>
      <div>
        
      </div>
      <img src="https://forgesolucoes.com.br/img/forge.png" alt="" />
    </div>
  );
};

export default Contador;
