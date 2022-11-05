import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Album = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(false);
  const [mensagem, setMensagem] = useState("");

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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7ZF_QSDbYwaVS8HsLhrFyunAyvVnrjwDYaBIbdODg3qExm2mCflhc4UIhO3X66P13hg&usqp=CAU" alt="" />
    </div>
  );
};

export default Album;
