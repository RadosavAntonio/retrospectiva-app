import { Link } from "@reach/router";
import React from "react";

export const TopMenu = () => {
  return (
    <nav>
      <Link to="/">Acasa</Link>
      <Link to="/auth">Intra pls</Link>
    </nav>
  );
};
