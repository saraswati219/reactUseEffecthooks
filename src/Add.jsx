import React, { useEffect } from "react";
import UseEffect from "./UseEffect";

const Add = () => {
  useEffect(() => {
    add();
  });
  function add() {
    let num1 = 20;
    let num2 = 30;
    let res = num1 + num2;
    console.log(res);
  }
  return <></>;
};

export default Add;
