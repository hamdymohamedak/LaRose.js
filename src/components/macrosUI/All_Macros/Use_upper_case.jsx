import React from "react";
import Default from "../Defualt";

export default function Use_upper_case() {
  return (
    <section>
      <Default
        title={"Use_upper_case"}
        des={"macro can convert the string from lowerCase to UpperCase"}
        p={""}
        code={` let name = "ak-macros"
use_upper_case!(name);
akp!("{}",name); /// AK-MACROS
        `}
      />
    </section>
  );
}
