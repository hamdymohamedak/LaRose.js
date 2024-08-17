import React from "react";
import Default from "../Defualt";

export default function Negative_number() {
  return (
    <section>
      <Default
        title={"Negative_number"}
        des={"Positive_number macro can set Positive Numbers Only"}
        p={"Example"}
        code={`let num = Negative_number!(-20);
akp!("Age is :{}", num); //OutPut:  Age is :-20
/// Wrong Syntax
let num = Negative_number!(20);
akp!("{}", num); /// Number Must be Negative
            `}
      />
    </section>
  );
}
