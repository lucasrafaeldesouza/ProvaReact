import { Alert, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contato = () => {
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
        <h1>Está com alguma duvida?</h1>
        <h1>Entre em contato com a nossa equipe</h1>
        
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Linkedin</h3>
        <p>https://br.linkedin.com/company/forge-solucoes-em-sistemas</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Facebook</h3>
        <p>https://pt-br.facebook.com/forgesolucoes/</p>   
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Instagram</h3>
        <p>https://www.instagram.com/forgesolucoes/</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Numero de contato</h3>
        <p>47 9 96105977 - Mário</p>
        <img
          src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
          alt=""
          className="img-fluid"
        />
      </Grid>
    </Grid>
  );
};

export default Contato;
