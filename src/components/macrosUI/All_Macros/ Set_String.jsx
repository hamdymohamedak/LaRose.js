import React from "react";
import Default from "../Defualt";

export default function Set_String() {
  return (
    <section>
      <Default
        title="set_String"
        des="This macro places a string in the memory,and if you define a new variable that carries the value of that string,it will not take up a new space in the memory."
        p="Example"
        code={`let my_name = set_String!("ak Macros crate");
akp!("{}",my_name);`}
      />
    </section>
  );
}
