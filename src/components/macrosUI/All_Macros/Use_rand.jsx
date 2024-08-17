import React from "react";
import Default from "../Defualt";

export default function use_rand() {
  return (
    <section>
      <Default
        title={""}
        des={
          "use_rand macro, this macro can generate a Random Number to use the macro you should add rand at cargo.toml the macro take 3 values"
        }
        p={`1 - variable
2 - point number
3 - the Method
you can type to values only [1,3]
and the default value for point number is // i32
Example`}
        code={`use_rand!(my_float, {
println!("Random float: {}", my_float);
});

/// or

use_rand!(my_float,f64,{
println!("Random float: {}", my_float);
});
        `}
      />
    </section>
  );
}
