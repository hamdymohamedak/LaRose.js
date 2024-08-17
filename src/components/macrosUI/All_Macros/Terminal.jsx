import React from "react";
import Default from "../Defualt";

export default function Terminal() {
  return (
    <section>
      <Default
        title={"Terminal"}
        des={
          "terminal macro its like a terminal at your OS,the macro can do any command at you OS,to use the macro you should type two Values"
        }
        p={`1 - your OS command
if you use windows the OS command is CMD
if you use Linux the OS command is sh`}
code={`terminal!("sh", "mkdir ak-macros_App");
/// if you want type more command you must end the command with ;
///
terminal!(
"sh",
"
cd '/home/ak/Desktop/' ;
mkdir ak-macros_App ;
cd ak-macros_App ;
touch new_file
"
);`}
      />
    </section>
  );
}
