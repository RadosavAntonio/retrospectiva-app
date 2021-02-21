
import React from "react";
import * as MS from "./top-menu.style"

export const TopMenu = () => {
  return (
    <MS.Nav>
      <MS.Linkulet to="/">Acasa</MS.Linkulet>
      <MS.Linkulet to="/auth">Logheazate</MS.Linkulet>
      <MS.Linkulet to="/dash">Deshboard</MS.Linkulet>
    </MS.Nav>
  );
};
