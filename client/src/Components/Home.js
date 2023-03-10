import { useState, useEffect } from "react";
import Card from "./Card";

export default function Home() {
  const [personData, setPersonData] = useState([]);

  function handleDelete(deleteId) {
    setPersonData((nextPersonData) =>
      personData.filter((person) => person.id !== deleteId)
    );
  }

  useEffect(() => {
    fetch("https://pink-seal-kilt.cyclic.app/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPersonData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Person Data</h1>
      <div className="container">
        {personData.map((person) => (
          <Card key={person.id} person={person} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}
