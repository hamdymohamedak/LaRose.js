import React from "react";
import Default from "../Defualt";

export default function Akp() {
  return (
    <section>
      <Default
        title="akp"
        des="akp macro for print"
        p="Example"
        code={`use akp_macros::akp;
/// or
use ak_macros::*;
akp!("Hello World");`}
      />
    </section>
  );
}
