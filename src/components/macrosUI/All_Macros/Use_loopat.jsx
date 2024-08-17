import React from 'react'
import Default from '../Defualt'

export default function Use_loopat() {
  return (
    <section>
        <Default
        title={""}
        des={"macro can looping at any array content, macro take three values"}
        p={`1- the array
2- variableName
3- method
Example 
        `}
        code={`let tarr: [&str; 3] = ["Max", "Jack", "Aly"];
use_loopAt!(tarr, varr, {
      println!("hello {}", varr);
});
/// you should't type Variable like that
use_loopAt!(tarr,{
println!("hello world");
});`}
        />
    </section>
  )
}
