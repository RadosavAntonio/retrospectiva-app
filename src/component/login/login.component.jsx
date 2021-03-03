import { Button, TextField } from "@material-ui/core";
import React from "react";
import * as LS from "./login.style";
import { auth, GitHubProvider } from '../../config/firebase'

// const user = window.localStorage.getItem('retrospective-app') 
//   ? JSON.parse(window.localStorage.getItem('retrospective-app'))
//   : ''

const user = ''
console.log(';########################')
console.log(user)

export const Login = () => {

  const iesiAcasa = () => {
    window.localStorage.setItem('retrospective-app', '')
  }

  const bagaTare = () => {
    console.log('cacaulullucicretcremali')
    auth
      .signInWithPopup(GitHubProvider)
      .then(({ user }) => {
        console.log(user)
        const { email, uid, displayName, photoURL } = user
        console.log(email)
        console.log(uid)
        console.log(displayName)
        console.log(photoURL)

      window.localStorage.setItem('retrospective-app', JSON.stringify({
        email,
        uid,
        displayName,
        photoURL
      }))
    })
    .catch(() => {
      console.log('Ha ha ah')
    })

  }


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
          onClick={iesiAcasa}
        >
          Logout
        </Button>
      </div>}
      {!user && <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={bagaTare}
        >
          Login
        </Button>
      </div>}
    </div>
  );
};
