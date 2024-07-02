import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data";
import "./App.css";

function App() {
  const cards = Data.map((travel) => {
    return <Card key={travel.id} item={travel} />;
  });

  return (
    <>
      <Header />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
