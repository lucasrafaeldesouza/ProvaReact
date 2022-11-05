import { Alert, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {}, [contadorAux]);

  return (
    <Grid container style={{ maxWidth: "800px", margin: "0 auto" }}>
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
      <img class="forge" src="https://forgesolucoes.com.br/img/quemsomos.png" alt="" />
    </div>
    </Grid>
  );
};

export default Contador;
