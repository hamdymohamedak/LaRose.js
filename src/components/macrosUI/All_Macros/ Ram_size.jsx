import React from 'react'
import Default from '../Defualt'

export default function Ram_size() {
  return (
    <section>
        <Default
        title={"Ram_size"}
        des={"Ram_size Macro can get the All Ram Size"}
        p={"Example"}
        code={`let my_ram = Ram_size!();
akp!("Total RAM: {:.2} GB", my_ram); /// Total RAM: 7.67 GB
akp!("Total RAM: {} GB", my_ram); // Total RAM: 7.670555114746094 GB
        `}
        />
    </section>
  )
}
