import { Button } from "@material-ui/core";
import React, { useState } from "react";

export const BtnBgd = ({ title, color }) => {

  const palet = [
    "primary",
    "secondary"
  ]
 

  return (
    <div>
      <Button variant='contained' color={palet.includes(color) ? color : 'default'}>{title}</Button>
    </div>
  )
};
