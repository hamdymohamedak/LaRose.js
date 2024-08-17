import React from "react";
import Default from "../Defualt";

export default function Use_loop() {
  return (
    <section>
      <Default
        title={"use_loop"}
        des={`use_loop macro can create a loop,this macro take Five values`}
        p={`1 - if you want to do event at loop set True else set False
2 - start-Number
3 - End-Number
4 - variable for loop
5 - the method
you should type true at first value to method working
            `}
        code={`use_loop!(true, 0, 100, i, akp!("{}", i));
use_loop!(false, 0, 100, i, akp!("{}", i)); /// Syntax Error`}
      />
    </section>
  );
}
