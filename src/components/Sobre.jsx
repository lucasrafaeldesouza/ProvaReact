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
        <h1>Quem somos?</h1>
        </div>
      <div>
        A Forge é uma empresa especializada em Soluções de Sistemas e
        Consultoria para a área Comercial. Com soluções dinâmicas e práticas,
        tem como objetivo aproximar a empresa de seus clientes, atuando com
        soluções de gestão da área comercial e melhorias nos processos. Nossa
        Missão é dinamizar os processos de nossos clientes, criando uma área
        comercial mais presente e atuante.
      </div>
      <img src="https://lh3.googleusercontent.com/p/AF1QipMAVye_4uWIpjHeK8PFY8Ka4lfqErBxd9y4H8E=w1080-h608-p-no-v0" alt="" />
    </div>
  );
};

export default Contador;
