import React from 'react'
import Defualt from "../Defualt"
export default function This_os() {
  return (
    <section>
        <Defualt
            title={"this_os"}
            des={"macro can know your operating system Name ,you can use it at any conditions"}
            p={""}
            code={`akp!("My operating system is :{}",this_OS!());`}
        />
    </section>
  )
}
