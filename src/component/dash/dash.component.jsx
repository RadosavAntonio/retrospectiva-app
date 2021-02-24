import React, { useEffect } from "react";
import * as DS from "./dash.style";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { db } from "../../config/firebase";

export const Dash = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    db.collection('porculeti').onSnapshot(snapshot => {
      setList(snapshot.docs.map(test => ({
        id: test.id,
        ...test.data()
      })))
      console.log(snapshot.size)
    })
  }, [])

  const bagaPorculeti = () => {
    db.collection('porculeti').add({
      name: 'Porculet',
      age: Math.floor(Math.random() * 100),
      qualities: 'gras',
    })
  }

  const stergePorculetul = id => {
    db.collection('porculeti').doc(id).delete()
  }

  return (
    <DS.ColorRed>
      <h1>Porculetii lui Francesca</h1>
      <Button variant="contained" color="secondary" size="medium" onClick={bagaPorculeti}>
        Mai baga un porculet!
      </Button>
      <div>
        <ul>
          {list.map(({name, age, qualities, id}) => {
            return(
              <li>
                <div>{name}</div>
                <div>{age}</div>
                <div>{qualities}</div>
                <DS.CacaMare onClick={() => stergePorculetul(id)}>💩</DS.CacaMare>
              </li>
            )
          })}
        </ul>
      </div>
    </DS.ColorRed>
  );
};
