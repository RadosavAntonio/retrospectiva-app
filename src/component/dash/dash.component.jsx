import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

export const Dash = () => {
  const [list, setList] = useState([]);
  // vreau sa chem ceva o singura data
  useEffect(() => {
    // si asa facem ceva o singura data
    db.collection("porculeti").onSnapshot((snapshot) => {
      setList(
        snapshot.docs.map((abcd) => ({
          id: abcd.id,
          ...abcd.data(),
        }))
      );
      // console.log(snapshot.size)
    });
  }, []);

  const bagaTare = () => {
    // vrem sa adaugam ceva intr-o baza de date smecheroasa
    db.collection("porculeti").add({
      name: "Super eroii",
      age: 912234,
      qualities: [
        "nice",
        "smart",
        "funny",
        "razatoare",
        "unicorn trainer",
        "smiley",
        "brando",
        "happy",
        "cool",
        "bright",
        "water",
        "catel",
        "latrat",
        "ham-ham",
        "miau miau",
        "bunny",
      ]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.round(Math.random() * 7)),
    });
  };

  const deleteItem = (id) => {
    console.log(`Sterge-l pe ala cu id: ${id}`);
    db.collection("porculeti").doc(id).delete();
  };

  return (
    <div>
      <h1>Porculetii lui Gigi</h1>
      <Button variant="contained" color="secondary" onClick={bagaTare}>
        Add something to the db
      </Button>

      <div>
        <ul>
          {list.map(({ age, name, qualities, id, test }) => {
            return (
              <li key={name}>
                <div>{age}</div>
                <div>{name}</div>
                <div>
                  <div>
                    {qualities.map((quality) => (
                      <span style={{ color: "green" }}>{quality} </span>
                    ))}
                  </div>
                  <Button onClick={() => deleteItem(id)}
                    variant="contained"
                    color='primary'
                  >&times;</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
