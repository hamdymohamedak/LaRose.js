import React from 'react'
import Default from '../Defualt'

export default function Positive_number() {
  return (
    <section>
        <Default
        title={"Positive_number"}
        des={"Positive_number macro can set Positive Numbers Only"}
        p={"Example"}
        code={`let num = Positive_number!(20);
akp!("Age is :{}", num); //OutPut:  Age is :20
/// Wrong Syntax
let num = Positive_number!(-20);
akp!("{}", num); /// Number Must be Positive`}
        />
    </section>
  )
}
