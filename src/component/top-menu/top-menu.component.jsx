import { Link } from "@reach/router";
import React from "react";

export const TopMenu = () => {
  return (
    <nav>
      <Link to="/">Acasa</Link>
      <Link to="/autentifica-te">Intra pls</Link>
    </nav>
  );
};
