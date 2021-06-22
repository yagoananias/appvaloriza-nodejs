import express from "express";

const app = express();

app.get("/teste-get", (request, response) => {
  return response.send("Response get OK!")
});

app.post("/teste-post", (request, response) => {
  return response.send("Response post OK!")
});

app.listen(3000, () => console.log("Deu bom!"));