import { Alert, Button, Grid } from "@mui/material";
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
    <Grid container style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Grid item xs={12}>
        <h1>Seja bem vindo!</h1>
        <h1>Forge Soluções Digitais</h1>
        <h3>Conheça as nossas áreas de atuação: </h3>
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>MOBILE</h3>
        <img
          src="https://docs.flutter.dev/assets/images/flutter-logo-sharing.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>WEB</h3>
        <img
          src="https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>SQL server</h3>
        <img
          src="data:image/png;base64,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"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>WEB</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12}>
        <h3>Para maiores informações acesse a aba contato. </h3>
      </Grid>
    </Grid>
  );
};

export default Contador;
