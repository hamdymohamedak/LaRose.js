import React from 'react'
import Default from '../Defualt'

export default function this_year() {
  return (
    <section>
        <Default
        title={"this_year"}
        des={"Macro to show Year"}
        p={`Example`}
        code={`let year = this_year!();
akp!("Year is: {}",year);`}
        />
    </section>
  )
}
