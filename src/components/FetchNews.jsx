import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
      <h1>Vagas de deselvolvimento</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((noticia) => (
          <Card
            variant="outlined"
            style={{
              marginBottom: "1rem",
              textAlign: "left",
              padding: "1rem",
              borderRadius: "2rem",
            }}
            key={noticia.id}
          >
            <div>
              
              {/* <div>{noticia.body}</div> */}
              <p>Vaga de estágio</p>
              <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhP5QnFc0bgsBd11Ujx8guHTHUdlkXqP9VVr0CgHGUUphi-ajNCFiyEz4ZPKRBST0btA&usqp=CAU" alt="" /></div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default FetchNews;
