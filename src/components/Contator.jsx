import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const multiMes = () => {
    setContador(contador * contador);
  };

  const zerarMes = () => {
    setContador(0);
  };

  useEffect(() => {
    if (contador > 12) {
      setContadorAux(100);
      setMensagem("O ano possui apenas 12 meses");
    }
  }, [contador]);

  useEffect(() => {
    console.log("fui chamado useEffect Aux");
  }, [contadorAux]);

  return (
    <div>
      <div>Olá Contador</div>
      <div>Meu mês de aniversário é: {contador} </div>
      <div>
        <div>{mensagem}</div>
        <Button onClick={zerarMes}>Zera tudo!</Button>
        <Button onClick={multiMes}>Multiplica mês!</Button>
        <Button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar um mês
        </Button>
        <Button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Diminuir um mês
        </Button>
      </div>
    </div>
  );
};

export default Contador;
