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
      <div>Quem somos?</div>
      <div>
        A Forge é uma empresa especializada em Soluções de Sistemas e
        Consultoria para a área Comercial. Com soluções dinâmicas e práticas,
        tem como objetivo aproximar a empresa de seus clientes, atuando com
        soluções de gestão da área comercial e melhorias nos processos. Nossa
        Missão é dinamizar os processos de nossos clientes, criando uma área
        comercial mais presente e atuante.
      </div>
    </div>
  );
};

export default Contador;
