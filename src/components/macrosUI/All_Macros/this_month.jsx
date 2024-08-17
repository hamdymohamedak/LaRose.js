import React from "react";
import Default from "../Defualt";

export default function this_month() {
  return (
    <section>
      <Default
        title={"this_month"}
        des={"Macro to show month"}
        p={"Example"}
        code={`let month = this_month!();
akp!("month is: {}",month);
        `}
      />
    </section>
  );
}
