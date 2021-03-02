import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import * as LS from "./login.style";

const user = window.localStorage.getItem('retrospective-app') 
  ? JSON.parse(window.localStorage.getItem('retrospective-app'))
  : ''
console.log(';########################')
console.log(user)

export const Login = () => {

  


  return (
    <div>
      <LS.Layout>This is the Login page.</LS.Layout>
      <div>
        <TextField />
      </div>
      <div>
        <TextField type="password" />
      </div>
      {user && <div>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          // onClick={iesiAcasa}
        >
          Logout
        </Button>
      </div>}
      {!user && <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // onClick={bagaTare}
        >
          Login
        </Button>
      </div>}
    </div>
  );
};
