import React from "react";
import {TextField, Button} from "@material-ui/core"

export const LogIn = () => {
  return (
    <div>
      <div>
        <TextField 
          placeholder="E-mail"
        />
      </div>

      <div>
        <TextField
          placeholder="Password"
          type="password"
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="contained"
          color="secundary"
        >
          Baga' si pe mine!
        </Button>
      </div>
    </div>
  );
};
