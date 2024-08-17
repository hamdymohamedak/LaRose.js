import React from 'react'
import Default from '../Defualt'

export default function Get_cpu() {
  return (
    <section>
        <Default
        title={"Get_CPU"}
        des={"Get_CPU macro can get the cpu informaion"}
        p={""}
        code={`let my_cpu = Get_CPU!();
akp!("My CPU is:  {}",my_cpu);`}
        />
    </section>
  )
}
