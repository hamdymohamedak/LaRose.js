import React from "react";
import Default from "../Defualt";
import Navbar from "../../Navbar/Navbar";

export default function If_cond() {
  return (
    <section>
<Default
    title={"if_cond"}
    des={"if_cond macro do if condition method"}
    p={`the macro takes 4 values:
1 - import the value you want to do event about him
2 - do condition
3 - if event
4 - else event
             `}
    code={`let my_name = "ak-macros";
if_cond!(my_name,
  my_name == "ak-macros",
  akp!("Hello package"),
  akp!("Oh No, this is not best crate...!")
);
/// let's do simple app with AK-Macros

let my_name = input_prompt!("Enter this Crate Name: ");
if_cond!(my_name,
  my_name == "ak-macros",
  akp!("Hello devs...!"),
  akp!("Try Again...")
);

/// let's use the use_loop macro at this app
let my_name = input_prompt!("Enter this Crate Name: ");
if_cond!(
  my_name,
  my_name == "ak-macros",
  use_loop!(true, 0, 100, i, akp!("{} - hello guys", i)),
  akp!("Try Again...")
);
    `}
  />
    </section>
  );
}
